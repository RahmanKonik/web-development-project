

let mylocation = document.querySelector(".location"); // button tag class
let p = document.querySelector(".myLocation"); // p tag class

mylocation.addEventListener("click", function getlocation(){
    try{
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch{

        p.innerHTML = err.message;

    }
})

// call this function and showing the user current location.
function showPosition(position){
    p.innerHTML = " Latitude: "+ position.coords.latitude +
                  "<br> Longitude: "+position.coords.longitude;
}

// showing error message

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            p.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            p.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            p.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            p.innerHTML = "An unknown error occurred.";
            break;
    }
}