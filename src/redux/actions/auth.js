import { navigate } from "../../NavigationRoot";
import { AUTHENTICATION_USER } from "./types";

export const authUser = token => {
    return {
        type: AUTHENTICATION_USER,
        payload: token
    }
}
export const tryAuth = (email,password,mode) => dispatch => {
    let url = "";
    let apiKey = 'AIzaSyAwPBatDskWNHXa8IUcEggjke_fTwAagF8';
    if( mode == 'signup') {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+apiKey;
    }
    else if ( mode == 'login') {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+apiKey;
    }
    fetch(url,{
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .catch(err => {
        console.log(err);
        alert("Authentication Failed!")
    })
    .then(res=> res.json())
    .then(data=>{
        if(data.error) {
            alert(data.error.message)
        }
        else {
            dispatch(authUser(data.idToken));
            navigate("Places");
        }
        console.log(data)
    })
}