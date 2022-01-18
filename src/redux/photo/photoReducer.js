import {
  LOAD_PHOTOS,
  LOAD_PHOTOS_SUCCESS,
  LOAD_PHOTOS_FAILURE,
} from "./photoTypes";

const initialState = {
  photos: [],
  loading: false,
  error: "",
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHOTOS:
      console.log(state.photos);
      console.log("still loading");
      return {
        ...state,
        loading: true,
      };

    case LOAD_PHOTOS_SUCCESS:
      console.log("success");
      return {
        photos: action.payload,
        loading: false,
        error: "",
      };

    case LOAD_PHOTOS_FAILURE:
      console.log("failed");
      return {
        photos: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default photoReducer;
