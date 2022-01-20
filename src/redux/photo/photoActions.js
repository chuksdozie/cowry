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
      url: "https://api.unsplash.com/search/photos?query=african&order_by=relevant&orientation=landscape&per_page=30",
      headers: {
        Authorization: "Client-ID jmCEZmTKNDAYL8p-FSQ92eVRtDWplRX45LiU3AL_nig",
        Cookie: "ugid=3b076f8d8069f3303040185b4a2ac8755475613",
      },
    };

    axios(config)
      .then((response) => {
        console.log(response, 87489);
        // response.data is the array of users
        const photos = response.data.results;
        console.log(photos);
        dispatch(getPhotosSuccess(photos));
      })
      .catch((error) => {
        console.log(error, 878);
        // error.message is the error description
        // console.log(error.message);
        // console.log(typeof error.message);
        dispatch(getPhotosFailure(error.errors));
      });
  };
};

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(getPhotos());
