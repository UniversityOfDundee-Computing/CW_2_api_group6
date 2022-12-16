
$('.btn').click(getCoords); //When the button on the search page is clicked, run the getCoords function

function getCoords(){

  fromLoc = document.getElementById('FP').value; //Set the value of the variable fromLoc to be the value in the text box with the id 'FP' (which is the starting postcode)
  toLoc = document.getElementById('TP').value; //Set the value of the variable toLoc to be the value in the text box with the id 'TP' (which is the destination postcode)

  fromUrl = 'https://api.postcodes.io/postcodes/' + fromLoc; //Sets the varaible fromUrl to be the url related to the start point's postcode
  toUrl = 'https://api.postcodes.io/postcodes/' + toLoc; //Sets the varaible toUrl to be the url related to the end point's postcode

  fetch(fromUrl) //Fetches from the api's url at fromUrl, which will give json related to the start point
    .then((resp) => resp.json()) //Gets the related json object
    .then(function (data) { //Runs a function on the json, with the json data as an argument

      fromLat = data.result.latitude; //Assigns the variable fromLat the latitude value returned by the API
      fromLong = data.result.longitude; //Assigns the variable fromLong the longitude value returned by the API
      localStorage.setItem('fromLatitude', fromLat); //Stores the starting latitude in local storage so it can be accessed by the result page
      localStorage.setItem('fromLongitude', fromLong); //Stores the starting longitude in local storage so it can be accessed by the result page

    })
    .catch(function (error) { //If an error occurs
      console.log(error); //Print the error to console
    });

    fetch(toUrl)//Fetches from the api's url at fromUrl, which will give json related to the start point
    .then((resp) => resp.json()) //Gets the related json object
    .then(function (data) { //Runs a function on the json, with the json data as an argument

      toLat = data.result.latitude; //Assigns the variable toLat the latitude value returned by the API
      fromLong = data.result.longitude; //Assigns the variable toLong the longitude value returned by the API
      localStorage.setItem('toLatitude', toLat); //Stores the endpoint latitude in local storage so it can be accessed by the result page
      localStorage.setItem('toLongitude', toLong); //Stores the endpoint longitude in local storage so it can be accessed by the result page

    })
    .catch(function (error) { //If an error occurs
      console.log(error); //Print the error to console 
    });
}