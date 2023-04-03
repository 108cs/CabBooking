import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  btn: {
    border: "1px solid black",
    textTransform: "none",
    marginBlock: "0.8rem",
    fontSize: "1rem",
    fontFamily: "Montserrat",
    fontWeight: "bolder",
    paddingInline: "3rem",
    transition: "500ms",
    "&:hover": {
      border: "0px solid transparent",
      backgroundColor: "rgb(93 81 81)",
      color: "white",
    },
  },
  // toastifyCss:{

  // }
});

const CabStatus = () => {
  const [cabs, setCabs] = useState("");
  const [cabData, setCabData] = useState(null);
  // console.log(cabData);
  const handleChangeS = (e) => {
    setCabs(e.target.value);
  };
  // console.log(cabs);
  const submitForm = async () => {
    // alert("Submitted")
    const { data } = await axios.get(`http://localhost:5000/cabStatus/` + cabs);
    setCabData(data[0]);
  };
  // console.log(cabData);
  // // console.log(cabData[0]);
  // if (cabData == null) console.log("NULL");
  // else {
  //   console.log("Not Null");
  // }
  const classes = useStyles();
  return (
    <Box className="top">
      <Box
        style={{
          margin: "5rem",
          display: "flex",
          flexDirection: "column",
          //   boxShadow: "-3px 0px 17px 4px rgba(216 ,216,216,0.75)",
          fontFamily: "Montserrat",
          borderRadius: "0.3rem",
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Status
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            // value={age}
            style={{ minWidth: "5rem" }}
            onChange={handleChangeS}
            autoWidth
            // value={source}
            label="Status"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Luxury Sedan">Luxury Sedan</MenuItem>
            <MenuItem value="SUV">SUV</MenuItem>
            <MenuItem value="Sedan">Sedan</MenuItem>
            <MenuItem value="Regular">Regular</MenuItem>
            <MenuItem value="Mini">Mini</MenuItem>
          </Select>
        </FormControl>
        <Box style={{ paddingBlockStart: "1rem" }}>
          {cabData === null ? (
            <></>
          ) : (
            <>
              {cabData.cabName} is {cabData.status}
            </>
          )}
        </Box>
        <Box style={{ marginBlockStart: "3rem" }}>
          <Button className={classes.btn} onClick={submitForm}>
            <Box style={{ position: "relative" }}> Check Status</Box>
          </Button>
          <ToastContainer className={classes.toastifyCss} />
        </Box>
      </Box>
    </Box>
  );
};

export default CabStatus;
