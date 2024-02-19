import React from "react";
import Spinner from "./Spinner";
import { useState, useEffect } from "react";

const UserResults = () => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    const response = await fetch("https://api.github.com/users", {
      method: "GET",
      headers: {
        Authorization: `token ${process.env.REACT_APP_TOKEN}`,
      },
    });
    const data = await response.json();
    setUsersList([...data]);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {usersList.map((item) => {
            return <h1 key={item.id}>{item.login}</h1>;
          })}
        </div>
      )}
    </>
  );
};

export default UserResults;
