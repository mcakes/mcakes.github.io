/// <reference path="typings/index.d.ts" />

export function getTilesets() {
  const MAPBOX_TILE_URL =
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";
  const THUNDERFOREST_TILE_URL =
    "https://tile.thunderforest.com/{id}/{z}/{x}/{y}.png?apikey=184ee07f52994ddfb0e6bf81626dcf5c";
  const TILE_OPTIONS = {
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
  };

  return {
    Satellite: L.tileLayer(MAPBOX_TILE_URL, {
      ...TILE_OPTIONS,
      id: "mapbox/satellite-v9",
    }),
    Street: L.tileLayer(MAPBOX_TILE_URL, {
      ...TILE_OPTIONS,
      id: "mapbox/streets-v11",
    }),
    Landscape: L.tileLayer(THUNDERFOREST_TILE_URL, {
      ...TILE_OPTIONS,
      id: "landscape",
    }),
    Outdoors: L.tileLayer(THUNDERFOREST_TILE_URL, {
      ...TILE_OPTIONS,
      id: "outdoors",
    }),
  };
}

export function buildPath(locations) {
  const markers = locations.map((loc) =>
    L.marker([loc.lat, loc.lng]).bindPopup(loc.timestamp)
  );
  const path = L.polyline(locations.map((loc) => [loc.lat, loc.lng]));
  return [markers, path];
}
