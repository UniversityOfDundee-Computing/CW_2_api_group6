let fromLoc = 'dd15dl';
let toLoc = document.getElementById('TP').value;

let fromUrl = 'https://api.postcodes.io/postcodes/' + fromLoc;
let toUrl = 'https://api.postcodes.io/postcodes/' + toLoc;

fetch(fromUrl)
    .then((resp) => resp.json())
    .then(function(data) {
      
      lat = data.result.latitude;
      long = data.result.longitude
      console.log(lat);
      console.log(long);` `



    })
    .catch(function(error) {
      console.log(error);
    });