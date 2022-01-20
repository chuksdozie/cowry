import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../../redux/photo/photoActions";
// import { getPhotos } from "../../redux";
import WeatherCard from "../molecules/WeatherCard";

const MainContent = ({ photoData, getPhoto, ...props }) => {
  const [mount, setMount] = useState(false);
  const { keyword } = props;
  const filterResult = (kk) => {
    const list = photoData.photos;
    let newList = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].alt_description && list[i].alt_description.includes(kk)) {
        newList.push(list[i]);
      }
    }
    console.log("hgdfhdshf", newList);
    return newList;
  };
  filterResult();

  useEffect(() => {
    // let filtered = photoData.photos.filter(filterResult(keyword));
    getPhoto();
    // if (!mount) {
    //   setMount(true);
    //   getPhoto();
    // }
  }, [keyword]);

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
      {keyword ? (
        filterResult(keyword).map((i, k) => (
          // <h2 key={k}>hel {i.id} </h2>
          <div key={k}>
            <WeatherCard
              imgSrc={i.urls.small}
              description={
                i.alt_description
                  ? i.alt_description.substring(0, 20) + "..."
                  : "No Description"
              }
              user={i.user.name}
            />
          </div>
        ))
      ) : photoData.loading ? (
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
            <WeatherCard
              imgSrc={i.urls.small}
              description={
                i.alt_description
                  ? i.alt_description.substring(0, 20) + "..."
                  : "No Description"
              }
              user={i.user.name}
            />
          </div>
        ))
      ) : (
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
