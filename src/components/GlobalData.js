/** @format */

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import axios from "axios";
import NumberFormat from "react-number-format";

export default function GlobalData() {
  const [globalData, setGlobalData] = useState();
  const [dataLoading, setDataLoading] = useState(false);
  const url = "https://covid19.mathdro.id/api";
  const loading = "Loading";
  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    setDataLoading(true);
    const { data } = await axios.get(url);
    console.log("apiResponse", data);
    setGlobalData(data);
    setDataLoading(false);
  };

  if (dataLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 1000,
            height: 128,
          },
        }}
      >
        <Paper elevation={3}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            style={{ color: "red" }}
          >
            {loading}
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            style={{ color: "red", fontWeight: "bold" }}
          >
            Global Data
          </Typography>
        </Paper>
        <Paper elevation={3}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            style={{ color: "orange" }}
          >
            {loading}
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            style={{ color: "red", fontWeight: "bold" }}
          >
            Recover
          </Typography>
        </Paper>
        <Paper elevation={3}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            style={{ color: "green" }}
          >
            {loading}
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            style={{ color: "red", fontWeight: "bold" }}
          >
            Fatalities
          </Typography>
        </Paper>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 1000,
          height: 128,
        },
      }}
    >
      <Paper elevation={3}>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          style={{ color: "red" }}
        >
          <NumberFormat
            value={globalData?.confirmed?.value}
            displayType={"text"}
            thousandSeparator={true}
          />
          ;
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          component="div"
          style={{ color: "red", fontWeight: "bold" }}
        >
          Global Data
        </Typography>
      </Paper>
      <Paper elevation={3}>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          style={{ color: "orange" }}
        >
          <NumberFormat
            value={globalData?.recovered?.value}
            displayType={"text"}
            thousandSeparator={true}
          />
          ;
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          component="div"
          style={{ color: "red", fontWeight: "bold" }}
        >
          Recover
        </Typography>
      </Paper>
      <Paper elevation={3}>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          style={{ color: "green" }}
        >
          <NumberFormat
            value={globalData?.deaths?.value}
            displayType={"text"}
            thousandSeparator={true}
          />
          ;
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          component="div"
          style={{ color: "red", fontWeight: "bold" }}
        >
          Fatalities
        </Typography>
      </Paper>
    </Box>
  );
}
