import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-colleziona',
  templateUrl: './colleziona.component.html',
  styleUrls: ['./colleziona.component.css']
})
export class CollezionaComponent implements OnInit {

  centerLat = 46.067;
  centerLng = 11.121;
  zoom = 10;
  
  constructor() { }
  
  aMap;
  // An array of markers
  markers = L.layerGroup();
  
  ngOnInit(): void {
	  
	this.aMap = L.map('mapid', {
      center: L.latLng(this.centerLat, this.centerLng),
      zoom: this.zoom,
      layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
    });
    
    this.markers.addTo(this.aMap);
    // Add controls for the layer
    L.control.layers(
      {},                        // base layers, radio buttons
      {"Markers": this.markers}  // overlay layers, checkbox buttons
    ).addTo(this.aMap);

    
    this.aMap.on("click", e => {
      // Get a handle for the DOM element containing the list of coordinates
      let displayCoord = document.getElementById('displayCoord');
      // Add a marker with the coordinates in the event descriptor
      let aMarker = L.marker(e.latlng).addTo(this.aMap);
	  this.markers.addLayer(aMarker);
      // Concatenate the new coordinates in the DOM element
      displayCoord.innerHTML +=
        aMarker.getLatLng().lat.toFixed(5) + // truncate coordinates
        ', ' +
        aMarker.getLatLng().lng.toFixed(5) +
        '<br>';
      console.log('%c ' + JSON.stringify(this.markers.toGeoJSON()));
    });
  }
}
