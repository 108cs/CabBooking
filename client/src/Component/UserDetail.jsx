import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const UserDetail = () => {
  const dispatch = useDispatch();
  const [fullName, setfullName] = useState();
  const [email, setEmail] = useState();

  const handleInputsN = (e) => {
    setfullName(e.target.value);

    dispatch({ type: "UPDATE_NAME", payload: fullName });
  };
  const handleInputsE = (e) => {
    setEmail(e.target.value);

    dispatch({ type: "UPDATE_EMAIL", payload: email });
  };
  return (
    <Box className="top">
      <Box
        style={{
          margin: "5rem",
          display: "flex",
          flexDirection: "column",
          boxShadow: "-3px 0px 17px 4px rgba(216 ,216,216,0.75)",
          fontFamily: "Montserrat",
          borderRadius: "0.3rem",
        }}
      >
        <Box style={{ padding: "2rem" }}>
          <Box
            style={{
              fontFamily: "Montserrat",
              fontWeight: "bolder",
              fontSize: "2rem",
              color: "#493d3d",
              textAlign: "left",
            }}
          >
            Enter Details
          </Box>
          <Box style={{ marginBlock: "2rem" }}>
            <TextField
              onChange={handleInputsN}
              label={"Your Name"}
              type={"text"}
              rows={3}
              style={{
                width: "90%",
              }}
              name="fullName"
              autoComplete="off"
            ></TextField>
          </Box>
          <Box style={{ marginBlock: "2rem" }}>
            <TextField
              onChange={handleInputsE}
              label={"Your Email"}
              type={"email"}
              rows={3}
              style={{
                width: "90%",
              }}
              name="email"
              autoComplete="off"
            ></TextField>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDetail;
