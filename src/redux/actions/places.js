import { ADD_PLACE, DELETE_PLACE, SET_PLACE } from "./types";

export const addPlace = place => dispatch => {
    fetch("https://my-places-20029.firebaseio.com/places.json", {
        method: "POST",
        body: JSON.stringify(place)
    })
        .catch(error => console.log(error))
        .then(response => response.json())
        .then(data => console.log(data))

};

export const setPlaces = places => {
    return {
        type: SET_PLACE,
        payload: places
    }
};

export const loadPlaces = () => dispatch => {
    fetch("https://my-places-20029.firebaseio.com/places.json")
        .catch(error => {
            alert("Something Went Wrong,Soory")
            console.log(error)
        })
        .then(res => res.json())
        .then(data =>{
            let places = [];
            for (let key in data) {
                places.push({
                    ...data[key],
                    key
                })
            }
            dispatch(setPlaces(places))
        })
};

export const deletePlace = key => {
    return {
        type: DELETE_PLACE,
        payload: key
    }
}