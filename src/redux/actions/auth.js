export const trySignup = (email,password) => dispatch => {
    let apiKey = 'AIzaSyAwPBatDskWNHXa8IUcEggjke_fTwAagF8';
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+apiKey,{
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
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
    })
    .catch(err => {
        console.log(err);
        alert("Authentication Failed!")
    })
}