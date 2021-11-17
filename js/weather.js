

function onSuccess() {
  alert("Success!")
}

function onError() {
  alert("Error!")
}


navigator.geolocation.getCurrentPosition( onSuccess, onError )