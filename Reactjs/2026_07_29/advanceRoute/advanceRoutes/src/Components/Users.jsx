import React from "react";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("marks"));


  // to get all the parameter in the URL 
  for(const [key,value] of searchParams.entries()){
    console.log(key,value);
  }

  // when you multiple attributes 
  console.log(searchParams.getAll("sort"));

  const activeUsers = searchParams.get("filter") === "active";

  return (
    <div>
      <h1>Users</h1>

      <button
        onClick={() => setSearchParams({ filter: "active" })}
      >
        Active Users
      </button>

      <button
        onClick={() => setSearchParams({})}
      >
        Reset Filter
      </button>

      {activeUsers ? (
        <h2>Showing Active Users</h2>
      ) : (
        <h2>Showing All Users</h2>
      )}
    </div>
  );
};

export default Users;