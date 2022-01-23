import React from "react";
import Card from "@mui/material/Card";
import { connect } from "react-redux";
import Typography from "@mui/material/Typography";
// import Cloud from "../../resources/cloud.jpeg";
import Loader from "../../resources/placeholder.gif";
// import { AiOutlineCloud } from "react-icons/ai";

const WeatherCard = ({ photoData, imgSrc, description, user, onClick }) => {
  return (
    <div style={{ margin: "15px 5px" }} onClick={onClick}>
      <Card sx={{ maxWidth: 250, maxHeight: 330 }}>
        {photoData.photos[0] ? (
          <div
            style={{
              height: "300px",
              width: "250px",
              backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.1),rgba(0, 0, 0, 0.93)),url(${imgSrc})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
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
                {description}
              </Typography>
              <Typography variant="body2" color="white" fontFamily={"PT SANS"}>
                {user}
              </Typography>
            </div>
          </div>
        ) : (
          <div
            style={{
              height: "300px",
              width: "250px",
            }}
          >
            <img src={Loader} alt="loader" />
          </div>
        )}
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    photoData: state.photo,
  };
};

export default connect(mapStateToProps)(WeatherCard);
