// const locations = [
//   { timestamp: new Date(2022, 5, 15), lat: 47.22797, lng: -79.9651 },
//   { timestamp: new Date(2022, 5, 15), lat: 48.22797, lng: -79.9651 },
//   { timestamp: new Date(2022, 5, 15), lat: 47.22797, lng: -80.9651 },
// ];

import { locations } from "./locations.js";

function createGeoJsonTripPoints(locations) {
  return {
    type: "FeatureCollection",
    features: locations.map((location) => ({
      type: "Feature",
      properties: {
        date: location.timestamp,
      },
      geometry: {
        type: "Point",
        coordinates: [location.lng, location.lat],
      },
    })),
  };
}

const map = L.map("map").setView([47.22797, -79.9651], 13);

const tiles = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);

const points = createGeoJsonTripPoints(locations)

L.geoJSON(points).addTo(map);
// var marker = L.marker([47.22797, -79.9651])
// var marker = L.marker([locations[0].lat, locations[0].lng])
//   .addTo(map)
//   .bindPopup("2022-05-15")
//   .openPopup();

// var circle = L.circle([51.508, -0.11], {
//   color: "red",
//   fillColor: "#f03",
//   fillOpacity: 0.5,
//   radius: 500,
// })
//   .addTo(map)
//   .bindPopup("I am a circle.");

// var polygon = L.polygon([
//   [51.509, -0.08],
//   [51.503, -0.06],
//   [51.51, -0.047],
// ])
//   .addTo(map)
//   .bindPopup("I am a polygon.");

// var popup = L.popup()
//   .setLatLng([51.513, -0.09])
//   .setContent("I am a standalone popup.")
//   .openOn(map);

// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent("You clicked the map at " + e.latlng.toString())
//     .openOn(map);
// }


// function createGeoJsonTripLines(locations) {
//   return {
//     “type”: “FeatureCollection”,
//     “features”: locations.map((stop = {}, index) => {
//       const prevStop = locations[index - 1];

//       if ( !prevStop ) return [];

//       const { placename, location = {}, date, todo = [] } = stop;
//       const { lat, lng } = location;
//       const properties = {
//         placename,
//         todo,
//         date
//       };

//       const { location: prevLocation = {} } = prevStop;
//       const { lat: prevLat, lng: prevLng } = prevLocation;

//       return {
//         type: ‘Feature’,
//         properties,
//         geometry: {
//           type: ‘LineString’,
//           coordinates: [
//             [ prevLng, prevLat ],
//             [ lng, lat ]
//           ]
//         }
//       }
//     })
//   }
// }

// map.on("click", onMapClick);
