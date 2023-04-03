import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// const age = useSelector(state => state.age);
const AvailableCars = () => {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.time);
  let [cab, setCab] = useState([]);
  let [cabList, setCabList] = useState([]);
  const handleChange = (e) => {
    setCab(e.target.value);
  };
  dispatch({ type: "UPDATE_CAB", payload: cab });
  // console.log(cab);

  // let [prices, setPrice] = useState([]);

  const getCabList = async () => {
    const { data } = await axios.get(`http://localhost:5000/availableCar`);
    setCabList(data.doc);
  };
  // console.log(time);
  useEffect(() => {
    // console.log("ok");
    getCabList();
  }, []);
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
            Select From Available Cabs
          </Box>
          <Box style={{ display: "flex" }}>
            <Box style={{ paddingBlockStart: "2rem" }}>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Cabs
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  // value={age}
                  style={{ minWidth: "10rem" }}
                  onChange={handleChange}
                  autoWidth
                  label="Cab"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {cabList.map((c, i) => {
                    // console.log(c.cabName);
                    let n = cabList.length;
                    let exp = c.expensiveIndex;
                    // let dist = 12;
                    let price = exp * 15 + (5 - n) * 2 + time * 10;
                    return (
                      <MenuItem value={c.cabName}>
                        <div style={{ display: "flex" }}>
                          <div>{c.cabName}</div>
                          <div style={{ paddingInlineStart: "5rem" }}>
                            ₹ {price}
                          </div>
                        </div>{" "}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Typography
            style={{
              color: "#c731dc",
              paddingBlockStart: "1rem",
              fontSize: "0.8rem",
            }}
          >
            * Cab price may vary due to factor of avaiblity and comfort{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AvailableCars;
