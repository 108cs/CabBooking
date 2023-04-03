import { Box } from "@material-ui/core";
import React from "react";

const Banner = () => {
  return (
    <Box className="top">
      <Box
        style={{
          marginInlineStart: "5rem",
          marginBlockStart: "2rem",
          display: "flex",
          flexDirection: "column",
          //   boxShadow: "-3px 0px 17px 4px rgba(216 ,216,216,0.75)",
          fontFamily: "Montserrat",
          borderRadius: "0.3rem",
        }}
      >
        <Box
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bolder",
            fontSize: "2rem",
            color: "#493d3d",
            textAlign: "left",
          }}
        >
          Book Your Cab Now
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
