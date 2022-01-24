import {
  LOAD_PHOTOS,
  LOAD_PHOTOS_SUCCESS,
  LOAD_PHOTOS_FAILURE,
} from "./photoTypes";

import axios from "axios";

export const loadPhotos = () => {
  return {
    type: LOAD_PHOTOS,
  };
};

export const getPhotosSuccess = (photos) => {
  return {
    type: LOAD_PHOTOS_SUCCESS,
    payload: photos,
  };
};

export const getPhotosFailure = (error) => {
  return {
    type: LOAD_PHOTOS_FAILURE,
    payload: error,
  };
};

export const getPhotos = () => {
  return (dispatch) => {
    dispatch(loadPhotos);

    var config = {
      method: "get",
      url: "https://api.unsplash.com/search/photos?query=african&order_by=relevant&orientation=landscape&per_page=32",
      headers: {
        Authorization: "Client-ID jmCEZmTKNDAYL8p-FSQ92eVRtDWplRX45LiU3AL_nig",
        // Cookie: "ugid=3b076f8d8069f3303040185b4a2ac8755475613",
      },
    };

    axios(config)
      .then((response) => {
        // response.data is the array of users
        const photos = response.data.results;
        response.headers["cache-control"] = "max-age=31536000";
        // console.log("header", response.headers);
        dispatch(getPhotosSuccess(photos));
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(getPhotosFailure(error.errors));
      });
  };
};
