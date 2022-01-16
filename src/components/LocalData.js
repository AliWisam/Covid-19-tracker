/** @format */

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import NumberFormat from "react-number-format";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function LocalData() {
  const [localData, setLocalData] = useState();
  const [dataLoading, setDataLoading] = useState(false);
  const url = "https://covid19.mathdro.id/api";
  const loading = "Loading";
  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    setDataLoading(true);
    const { data } = await axios.get(`${url}/countries/pakistan`);
    console.log("apiResponseLocal", data);
    setLocalData(data);
    setDataLoading(false);
  };
  if (dataLoading) {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {loading}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {loading}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {loading}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {loading}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Confirmed Cases:
          <NumberFormat
            value={localData?.confirmed?.value}
            displayType={"text"}
            thousandSeparator={true}
          />
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          deaths Cases:
          <NumberFormat
            value={localData?.recovered?.value}
            displayType={"text"}
            thousandSeparator={true}
          />
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          recovered Cases:
          <NumberFormat
            value={localData?.recovered?.value}
            displayType={"text"}
            thousandSeparator={true}
          />
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          lastUpdate:
          <NumberFormat
            value={localData?.lastUpdate}
            displayType={"text"}
            thousandSeparator={true}
          />
        </Typography>
      </CardContent>
    </Card>
  );
}
