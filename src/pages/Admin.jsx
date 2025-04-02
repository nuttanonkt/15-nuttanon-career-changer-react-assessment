import React from "react";
import Home from "./Home";
import Table from "../component/Table";
import CreateUser from "../component/createUser";

function Admin() {
  return (
    <>
      <Home />
      <CreateUser />
      <Table />
    </>
  );
};

export default Admin;
