import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../../redux/photo/photoActions";
// import { getPhotos } from "../../redux";
import WeatherCard from "../molecules/WeatherCard";

const MainContent = ({ photoData, getPhoto }) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    getPhoto();
    // if (!mount) {
    //   setMount(true);
    //   getPhoto();
    // }
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
      ) : photoData.photos[0] ? (
        photoData.photos.map((i, k) => (
          <div key={k}>
            <h2>{i.name}</h2>
            <WeatherCard />
          </div>
        ))
      ) : (
        // <h2>{photoData.photos[5].name}</h2>
        <h2>nothing to show</h2>
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
    getPhoto: () => dispatch(getPhotos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
