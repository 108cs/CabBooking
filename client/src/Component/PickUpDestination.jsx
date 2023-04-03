import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const PickUpDestination = () => {
  const [source, setSource] = useState("");
  const [dest, setDest] = useState("");
  const [check, setCheck] = useState(false);
  const [minDist, setMinDist] = useState([]);
  const dispatch = useDispatch();

  const handleChangeS = (e) => {
    setSource(e.target.value);
    // console.log(source);
  };
  const handleChangeD = (e) => {
    setDest(e.target.value);
    // console.log(dest);
  };
  function PickUpDestination() {
    if (source === dest) {
      setCheck(true);
    } else setCheck(false);
  }
  // console.log(typeof source);
  // console.log(source);

  const calculateMinDist = async () => {
    // console.log(source);
    let s = 1;
    let t = 1;
    const { data } = await axios.get(
      `http://localhost:5000/getMinDist/` + source + "/" + dest
    );
    // console.log(data);
    setMinDist(data);
    dispatch({ type: "UPDATE_TIME", payload: data });
  };
  // console.log(minDist);
  useEffect(() => {
    PickUpDestination();
    calculateMinDist();
  }, [source, dest]);

  let calcMax = 5 * 15 + 5 * 2 + minDist * 10;
  let calcMin = 1 * 15 + 1 * 2 + minDist * 10;
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
            Select Source And Destination
          </Box>
          <Box style={{ display: "flex" }}>
            <Box style={{ paddingBlockStart: "2rem" }}>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Source
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  // value={age}
                  style={{ minWidth: "5rem" }}
                  onChange={handleChangeS}
                  autoWidth
                  // value={source}
                  label="Source"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={0}>A</MenuItem>
                  <MenuItem value={1}>B</MenuItem>
                  <MenuItem value={2}>C</MenuItem>
                  <MenuItem value={3}>D</MenuItem>
                  <MenuItem value={4}>E</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              style={{
                fontFamily: "Montserrat",
                fontWeight: "bolder",
                fontSize: "1.5rem",
                color: "#493d3d",
                textAlign: "left",
                paddingBlockStart: "3.1rem",
                paddingInline: "3rem",
              }}
            >
              To
            </Box>
            <Box style={{ paddingBlockStart: "2rem" }}>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Destination
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  // value={age}
                  style={{ minWidth: "7rem" }}
                  onChange={handleChangeD}
                  autoWidth
                  label="Destination"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={0}>A</MenuItem>
                  <MenuItem value={1}>B</MenuItem>
                  <MenuItem value={2}>C</MenuItem>
                  <MenuItem value={3}>D</MenuItem>
                  <MenuItem value={4}>E</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          {check ? (
            <>
              <Typography
                style={{
                  fontSize: "0.8rem",
                  color: "red",
                  paddingBlockStart: "1rem",
                }}
              >
                *Source And Destination Can Not Be Same
              </Typography>
            </>
          ) : (
            <>
              <Typography
                style={{
                  fontSize: "1rem",
                  color: "grey",
                  paddingBlockStart: "1rem",
                }}
              >
                <div>
                  Shortest Time To Travel Between Source and Destination is{" "}
                  {minDist} minutes{" "}
                </div>
                <div>
                  {" "}
                  Cab prices may range from ₹{calcMin} to ₹{calcMax}
                </div>
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PickUpDestination;
