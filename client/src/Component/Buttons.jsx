import { Box, Button, makeStyles } from "@material-ui/core";
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

const Buttons = () => {
  const [user, setUser] = useState({});

  const fullName = useSelector((state) => state.fullName);
  const email = useSelector((state) => state.email);
  const time = useSelector((state) => state.time);
  const cabName = useSelector((state) => state.cab);

  // console.log(fullName);
  // console.log(email);
  // console.log(time);
  // console.log(cabName);
  const submitForm = async () => {
    // alert("Submitted")
    if (!fullName || !email) {
      toast.warn(`Fill User Details`, {
        position: "top-center",
        autoClose: 2000,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
        textAlign: "center",
      });
    } else {
      // console.log("done");
      await axios
        .post(`http://localhost:5000/updateStatus`, {
          fullName: fullName,
          email: email,
          time: time,
          cabName: cabName,
        })
        .then((response) => {
          var message = response.data.msg;
          // console.log(message);
          var status = response.status;
          if (status === 200) {
            toast.success(`Cab Booked Check Your Email For More Detail`, {
              position: "top-center",
              autoClose: 2000,
              pauseOnHover: false,
              pauseOnFocusLoss: false,
              draggable: true,
              textAlign: "center",
            });
            setTimeout(function () {
              window.location.reload();
              window.scrollTo(0, 0);
            }, 3000);

            // message;
          } else {
            // console.log("Unsuccssful");
          }
        });
    }
  };
  // console.log(user);
  // console.log(fullName);
  // console.log(email);
  // console.log(time);
  // console.log(cabName);
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
        <Box>
          <Button className={classes.btn} onClick={submitForm}>
            <Box style={{ position: "relative" }}> BooK Now</Box>
          </Button>
          <ToastContainer className={classes.toastifyCss} />
        </Box>
      </Box>
    </Box>
  );
};

export default Buttons;
