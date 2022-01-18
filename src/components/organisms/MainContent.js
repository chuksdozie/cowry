import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../../redux/photo/photoActions";
// import { getPhotos } from "../../redux";
import WeatherCard from "../molecules/WeatherCard";

const MainContent = ({ photoData }) => {
  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        padding: "0px 0 15px",
        margin: "-45px 0px 0px",
        flexWrap: "wrap",
      }}
    >
      {photoData.loading ? (
        <div>
          <h2>loading</h2>
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>
      ) : photoData.error ? (
        <h2>{photoData.error}</h2>
      ) : (
        <div>
          <h2>{success}</h2>
          <WeatherCard />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    photoData: state.photo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos: () => dispatch(getPhotos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
