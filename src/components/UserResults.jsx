import React from "react";
import Spinner from "./Spinner";
import UserCard from "./UserCard";
import UserContext from "./context/UserContext";
import { useState, useEffect, useContext } from "react";

const UserResults = () => {
  const { usersList, isLoading } = useContext(UserContext);

  return (
    <>
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {usersList.map((item) => {
            return <UserCard user={item} key={item.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default UserResults;
