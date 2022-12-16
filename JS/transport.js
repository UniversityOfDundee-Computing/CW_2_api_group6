

const appId = '96fa6eb9'
const appKey = 'b2869c19f6db671b24b67a3ad3de6bb5'
var fromLatitude = sessionStorage.getItem('POSTCODE FROM LAT');
var fromLongitude = sessionStorage.getItem('POSTCODE FROM LONG');
var toLatitude = sessionStorage.getItem('POSTCODE TO LAT');
var toLongitude = sessionStorage.getItem('POSTCODE TO LONG');

start = fromLongitude + ',' + fromLatitude
end = toLongitude + ',' + toLatitude

//This was taken from the usage example page of the transport API we used. It is not my own code, I do not claim it to be my own
//Source: https://github.com/transportapi/usage-examples/blob/master/src/examples/journey-planner/main.js
const url = 'http://transportapi.com/v3/uk/public/journey/from/lonlat:' + start + '/to/lonlat:' + end + '.json?service=silverrail&app_id=' + appId + '&app_key=' + appKey

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {

        const journeyStepsHtml = route.route_parts
            .map(routePart => {
                const lineName = routePart.mode === 'bus' ? routePart.line_name : ''
                return `
        <div>
          <b> ` + routePart.departure_time + `</b> ` + routePart.from_point_name +
          `<div class="leg-details">
            <span class="mode mode-` + routePart.mode+ `"></span>` + lineName + 
            `for ` + routePart.duration.slice(0, 5) +
          `</div>
        </div>`
      
            })
            .join('\n')
        document.getElementById('app').html(`
            Duration:` + route.duration.slice(0, 5) + `
            <span class="duration-from-to">` + (route.departure_time - route.arrival_time)`</span>
            <div class="legs">
              `+ journeyStepsHtml + `
              <div>
                <b>` + route.route_parts[route.route_parts.length - 1].arrival_time + `</b> Destination
              </div>
            </div>
          `)
    })