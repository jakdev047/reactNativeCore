import { AUTHENTICATION_USER } from "../actions/types";

const initialState = {
    isAuth: false
};

const reducers = (state=initialState,action) => {
    const {type,payload} = action;
    switch(type) {
        case AUTHENTICATION_USER: 
            return {
                ...state,
                isAuth: true
            }
        default:
            return state;
    };
};

export default reducers;