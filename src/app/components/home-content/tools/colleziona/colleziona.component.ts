import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AuthService } from '@auth0/auth0-angular';
import { StorageService } from '../storage.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-colleziona',
  templateUrl: './colleziona.component.html',
  styleUrls: ['./colleziona.component.css']
})
export class CollezionaComponent implements OnInit {
  profile: any;
  centerLat = 44.0;
  centerLng = 10.3;
  zoom = 10;
  downloadURL: SafeUrl;
  
  constructor(private sanitizer: DomSanitizer, public authService: AuthService, private db: StorageService) { }
  
  aMap;
  // An array of markers
  markers = L.layerGroup();
  
  ngOnInit(): void {
	 
	this.authService.user$.subscribe((data) => {
    if (data) {
      this.profile = { ...data };
    }});

	this.aMap = L.map('mapid', {
      center: L.latLng(this.centerLat, this.centerLng),
      zoom: this.zoom,
      layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
    });
    
    L.control.scale().addTo(this.aMap);
    
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
      let markersGeoJSON = JSON.stringify(this.markers.toGeoJSON());
      this.downloadURL= this.sanitizer.bypassSecurityTrustUrl(
		'data:' + 
		'text/json;charset=UTF-8' + 
		',' + 
		encodeURIComponent(markersGeoJSON)
	  );
      console.log(this.downloadURL);
    });

  };
}
