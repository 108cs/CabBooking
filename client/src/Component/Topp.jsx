import Navbar from "./Navbar";
import UserDetail from "./UserDetail";
import PickUpDestination from "./PickUpDestination";
import AvailableCars from "./AvailableCars";
import Buttons from "./Buttons";
import Banner from "./Banner";
import React, { useState } from "react";

const Topp = () => {
  return (
    <div style={{ width: "70%" }}>
      <Banner />
      <UserDetail />
      <PickUpDestination />
      <AvailableCars />
      <Buttons />
    </div>
  );
};

export default Topp;
