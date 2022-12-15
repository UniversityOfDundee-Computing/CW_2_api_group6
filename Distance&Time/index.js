
const appId = 'e84d6ca6'
const appKey = '5ed4ca8421d80e490b3bec4494baec52'
document.getElementById("myBtn").addEventListener("click", findInfo);
function findInfo(){
let fPostCode = document.getElementById('fPostCode').value;
let tPostCode = document.getElementById('tPostCode').value;

const url = 'http://transportapi.com/v3/uk/public/journey/from/postcode:st52qd/to/postcode:ex85jf.json?service=tfl' +
`&app_id=${appId}&app_key=${appKey}`
    fetch(url)
       .then(response => response.json())
       .then(resPonseJson => console.log(resPonseJson))
       .catch(function(error){
        console.log("error")
       })
    //    document.getElementById('bus').innerText=resPonseJson
}
