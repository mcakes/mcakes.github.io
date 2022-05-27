/// <reference path="typings/index.d.ts" />

import "./slider.js";
import { locations } from "./locations.js";
import { getTilesets, buildPath } from "./utils.js";

const tilesets = getTilesets();

const map = L.map("map-container", {
  zoomControl: false,
  layers: Object.values(tilesets),
}).setView([47.22797, -79.9651], 13);

const [markers, path] = buildPath(locations);
markers.map((marker) => marker.addTo(map));
path.addTo(map);

L.control.zoom({ position: "bottomright" }).addTo(map);
L.control.layers(tilesets).addTo(map);
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
