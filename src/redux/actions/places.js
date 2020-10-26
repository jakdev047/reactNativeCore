import { ADD_PLACE, DELETE_PLACE } from "./types";

export const addPlace = place =>  dispatch => {
    fetch("https://my-places-20029.firebaseio.com/places.json",{
        method: "POST",
        body: JSON.stringify(place)
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
};

export const deletePlace = key => {
    return {
        type: DELETE_PLACE,
        payload: key
    }
}