import { ADD_PLACE } from "../actions/types";

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
        default:
            return state;
    };
};

export default reducers;