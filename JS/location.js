document.getElementById("searchButton").addEventListener('click', refreshPage);

// function to create card for the postcode/location
function dest(url, fromOrTo) {
  var outputMessage = document.getElementById('printText');
  var locCont = document.getElementById('locations');
  var outputText = document.createElement('h3');
  outputText.setAttribute('class', 'col-12')
  outputText.classList.add('mb-4');
  locCont.innerHTML = "";
  outputMessage.innerHTML = "";
  fromLoc = document.getElementById('FP').value;
  toLoc = document.getElementById('TP').value;
  outputText.innerHTML = "Results from " + fromLoc + " to " + toLoc;
  outputMessage.appendChild(outputText);

  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data);
      var button = document.createElement('button')
      var elementC = document.createElement('div');
      var elementHead = document.createElement('h4');
      var cardText = document.createElement('p');
      var division = document.createElement('div');
      var elementBody = document.createElement('div');
      elementHead.classList.add('card-title');
      elementC.classList.add('my-2');
      elementC.classList.add('card');
      elementC.classList.add('border-success');
      elementC.classList.add('border');
      elementC.classList.add('rounded-5');
      elementBody.classList.add('card-body');
      cardText.classList.add('card-text');
      button.classList.add('btn');
      button.classList.add('btn-dark');
      division.setAttribute('class', 'col-sm-12 col-md-6 card-deck');
      elementHead.innerHTML = data.result.admin_district;
      cardText.innerHTML = data.result.postcode;
      button.innerHTML = "View";

      latScheme = fromOrTo + " LAT"
      longScheme = fromOrTo + " LONG"

      latitude = data.result.latitude
      longitude = data.result.longitude

      sessionStorage.setItem(latScheme, latitude);
      sessionStorage.setItem(longScheme, longitude);




      elementBody.appendChild(cardText);
      elementBody.appendChild(elementHead);
      elementBody.appendChild(button);
      elementC.appendChild(elementBody);
      division.appendChild(elementC);
      locCont.appendChild(division);
    })
    .catch(function (error) {
      console.log("ERROR: issue with URL, did you input a valid postcode?");
      const outputMessage = document.getElementById('printText');
      var outputText = document.createElement('h3');

      outputText.innerHTML = "ERROR, INVALID " + fromOrTo;
      outputMessage.appendChild(outputText);

      console.log(error);

    });
}

// called every time the search button is pressed
function refreshPage() {
  var url = "";
  var fromOrTo = "";
  locationFrom = document.getElementById("FP").value;
  locationTo = document.getElementById("TP").value;
  fromUrl = 'https://api.postcodes.io/postcodes/' + locationFrom;
  toUrl = 'https://api.postcodes.io/postcodes/' + locationTo;
  fromOrTo = "POSTCODE TO"
  url = toUrl;
  dest(toUrl, fromOrTo);
  fromOrTo = "POSTCODE FROM"
  url = fromUrl;
  dest(fromUrl, fromOrTo);
  
}
