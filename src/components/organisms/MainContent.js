import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../../redux/photo/photoActions";
// import { getPhotos } from "../../redux";
import WeatherCard from "../molecules/WeatherCard";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const MainContent = ({ photoData, getPhoto, ...props }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState({});
  const handleOpen = (x) => {
    setSelection(x);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { keyword } = props;
  const filterResult = (kk) => {
    const list = photoData.photos;
    let newList = [];
    for (let i = 0; i < list.length; i++) {
      if (
        list[i].alt_description &&
        list[i].alt_description.includes(kk.toLowerCase())
      ) {
        newList.push(list[i]);
      }
    }
    return newList;
  };
  // filterResult();

  useEffect(() => {
    // let filtered = photoData.photos.filter(filterResult(keyword));
    getPhoto();
    // }
  }, [getPhoto]);

  return (
    <div
      style={{
        display: "flex",
        width: "85%",
        justifyContent: "space-evenly",
        padding: "0px 0 15px",
        margin: "-45px 0px 0px",
        flexWrap: "wrap",
      }}
    >
      {keyword ? (
        filterResult(keyword).map((i, k) => (
          <div key={k}>
            <WeatherCard
              onClick={() => handleOpen(i)}
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
              onClick={() => handleOpen(i)}
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
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
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        onClick={() => handleClose()}
        style={{
          display: "flex",
          backgroundColor: "rgba(214, 214, 214, 0.8)",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        {selection.id ? (
          <Card sx={{ maxWidth: 600, width: "80%", border: "0px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="auto"
                image={selection.urls.small || "/image.jpg"}
                alt=""
                style={{
                  height: "80%",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {selection.alt_description || "No Description"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selection.user.name || "Unknown Author"}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => handleClose()}
              >
                Close
              </Button>
            </CardActions>
          </Card>
        ) : (
          <h2>Not Available</h2>
        )}
      </Modal>
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
