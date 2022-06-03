/// <reference path="typings/index.d.ts" />

import "./slider.js";
import { locations } from "./locations.js";
import { getTilesets, buildPath } from "./utils.js";

const tilesets = getTilesets();
const lastLocation = locations[locations.length - 1];
console.log(lastLocation)
const map = L.map("map-container", {
  zoomControl: false,
  layers: Object.values(tilesets),
}).setView([lastLocation.lat, lastLocation.lng], 11);

const [markers, path] = buildPath(locations);
markers.map((marker) => marker.addTo(map));
path.addTo(map);

L.control.zoom({ position: "bottomright" }).addTo(map);
L.control.layers(tilesets).addTo(map);
tilesets["Street"].addTo(map);
L.control
  .slider({
    position: "topleft",
    min: 0,
    max: locations.length,
    locations,
    markers,
    path,
    map,
  })
  .addTo(map);
