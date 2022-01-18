import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Cloud from "../../resources/cloud.jpeg";
import Loader from "../../resources/placeholder.gif";
import { AiOutlineCloud } from "react-icons/ai";

const WeatherCard = (props) => {
  const {} = props;
  return (
    <div style={{ margin: "15px 5px" }}>
      <Card sx={{ maxWidth: 250, maxHeight: 330 }}>
        {/* <div
          style={{
            height: "300px",
            width: "250px",
            // background: `linearGradient(
            //   rgba(245, 246, 252, 0.52),
            //   rgba(117, 19, 93, 0.73)
            // ),url(${Cloud})`,
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.1),rgba(0, 0, 0, 0.93)),url(${Cloud})`,
          }}
        >
          <div
            style={{
              position: "relative",
              padding: "0px 15px ",
              height: "95%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              top: 0,
            }}
          >
            <Typography variant="h6" color="white" fontFamily={"PT SANS"}>
              Cloudy
            </Typography>
            <Typography variant="body2" color="white" fontFamily={"PT SANS"}>
              Cloudy
            </Typography>
          </div>
        </div> */}
        <div
          style={{
            height: "300px",
            width: "250px",
          }}
        >
          <img src={Loader} alt="loader" />
        </div>
      </Card>
    </div>
  );
};

export default WeatherCard;
