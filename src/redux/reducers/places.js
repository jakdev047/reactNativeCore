import { ADD_PLACE, DELETE_PLACE } from "../actions/types";

const initialState = {
    placeList: []
};

const reducers = (state=initialState,action) => {
    const {type,payload} = action;
    switch(type) {
        case ADD_PLACE:
            return {
                ...state,
                placeList: [payload,...state.placeList]
            };
        case DELETE_PLACE:
            return {
                ...state,
                placeList: state.placeList.filter(place=> place.key !== payload.key)
            }
        default:
            return state;
    };
};

export default reducers;