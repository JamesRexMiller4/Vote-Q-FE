import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../app/App";
import CenterList from "./CenterList";
import CivicDataService from "../../api/CivicDataService";
import { BrowserRouter as Router, NavLink,Link } from "react-router-dom";

function CenterContainer() {
  const { state, dispatch } = useContext(AppContext);

  // this useEffect is just to check the value, you can totally remove it
  useEffect(() => {
    CivicDataService.getAll().then((response) => {
      console.log(response)
      dispatch({
        type: "updateCenterLocations",
        payload: response,
      });
    });
  }, [state.address]);

  return (
    <div className="row d-flex justify-content-center mt-2">
      <div className="col-8">
      <header>
        <h3>Your Voting Centers</h3>
      </header>
        <CenterList />
      </div>
    </div>
  );
}

export default CenterContainer;
