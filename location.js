
$('.btn').click(getCoords);

function getCoords(){

  fromLoc = document.getElementById('FP').value;
  toLoc = document.getElementById('TP').value;

  fromUrl = 'https://api.postcodes.io/postcodes/' + fromLoc;
  toUrl = 'https://api.postcodes.io/postcodes/' + toLoc;

  fetch(fromUrl)
    .then((resp) => resp.json())
    .then(function (data) {

      fromLat = data.result.latitude;
      fromLong = data.result.longitude;
      localStorage.setItem('fromLatitude', fromLat);
      localStorage.setItem('fromLongitude', fromLong);

    })
    .catch(function (error) {
      console.log(error);
    });

    fetch(toUrl)
    .then((resp) => resp.json())
    .then(function (data) {

      toLat = data.result.latitude;
      fromLong = data.result.longitude;
      localStorage.setItem('toLatitude', toLat);
      localStorage.setItem('toLongitude', toLong);

    })
    .catch(function (error) {
      console.log(error);
    });
}