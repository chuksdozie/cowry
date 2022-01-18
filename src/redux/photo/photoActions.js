import {
  LOAD_PHOTOS,
  LOAD_PHOTOS_SUCCESS,
  LOAD_PHOTOS_FAILURE,
} from "./photoTypes";
import axios from "axios";
import store from "../store";

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
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response, 87489);
        // response.data is the array of users
        const photos = response.data;
        console.log(photos);
        dispatch(getPhotosSuccess(photos));
      })
      .catch((error) => {
        console.log(error, 878);
        // error.message is the error description
        console.log(error.message);
        console.log(typeof error.message);
        dispatch(getPhotosFailure(error.message));
      });
  };
};

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(getPhotos());
