/// <reference path="typings/index.d.ts" />

import { buildPath } from "./utils.js";

L.Control.Slider = L.Control.extend({
	options: {
		position: 'topleft',
    min: 0,
    max: 0,
    value: 0,
	},

  onAdd: function (map) {
    const div = L.DomUtil.create("div");
    const input = L.DomUtil.create("input", "slider", div);
    input.type = "range";
    input.min = this.options.min;
    input.max = this.options.max;
    input.value = this.options.max;

    const locations = this.options.locations;

    this.markers = this.options.markers;
    this.path = this.options.path;

    input.addEventListener("input", () => {
      this.markers.map(marker => map.removeLayer(marker)); 
      map.removeLayer(this.path)
      const [markers, path] = buildPath(locations.slice(0, input.value))
      this.markers = markers;
      this.path = path;
      markers.map(marker => marker.addTo(map));
      path.addTo(map);
    })

    L.DomEvent.disableClickPropagation(div);
    return div;
  },

  onRemove: function (map) {
    // Nothing to do here
  },
});

L.control.slider = function (opts) {
  return new L.Control.Slider(opts);
};
