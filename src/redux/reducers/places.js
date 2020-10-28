import { ADD_PLACE, DELETE_PLACE, SET_PLACE, AUTHENTICATION_USER } from "../actions/types";

const initialState = {
    placeList: [],
    isAuth: false,
    token: null,
};

const reducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_PLACE:
            return {
                ...state,
                placeList: [payload, ...state.placeList]
            };
        case DELETE_PLACE:
            return {
                ...state,
                placeList: state.placeList.filter(place => place.key !== payload)
            };
        case SET_PLACE:
            return {
                ...state,
                placeList: payload
            }
        case AUTHENTICATION_USER:
            return {
                ...state,
                isAuth: true,
                token: payload
            }
        default:
            return state;
    };
};

export default reducers;