import React from "react";
import { useState, useContext } from "react";
import GithubContext from "./context/UserContext";
import AlertContext from "./context/AlertContext";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");

  const { usersList, searchUsers, clearUsers } = useContext(GithubContext);
  const { alert, setAlert } = useContext(AlertContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText == "" || searchText == null) {
      setAlert("Please enter a Github profile to search", "error");
      return;
    }

    //Call search function
    searchUsers(searchText);

    setSearchText("");
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="GitHub profile"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-secondary btn-lg"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {usersList.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={() => clearUsers()}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
