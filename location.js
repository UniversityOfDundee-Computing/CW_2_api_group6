
$('.btn').click(getCoords);

function getCoords(){

  fromLoc = document.getElementById('FP').value;
  toLoc = document.getElementById('TP').value;

  fromUrl = 'https://api.postcodes.io/postcodes/' + fromLoc;
  toUrl = 'https://api.postcodes.io/postcodes/' + toLoc;

  fetch(fromUrl)
    .then((resp) => resp.json())
    .then(function (data) {

      lat = data.result.latitude;
      long = data.result.longitude;
      localStorage.setItem('latitude', lat);
      localStorage.setItem('longitude', long);

    })
    .catch(function (error) {
      console.log(error);
    });
}