import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { StorageService } from '../storage.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-crea',
  templateUrl: './crea.component.html',
  styleUrls: ['./crea.component.css']
})
export class CreaComponent implements OnInit {

  profile: any;
  initLat = 44.0;
  initLng = 10.3;
  zoom = 10;
  aMap: any;
  center: any;
  centerMarker: any;
  radius = 1000.0;
  circle: any;
  markers = L.layerGroup();
  
  constructor(public authService: AuthService, private db: StorageService) { }

  ngOnInit(): void {
	
	this.authService.user$.subscribe((data) => {
    if (data) {
      this.profile = { ...data };
    }});
// Create a map    
    this.aMap = L.map('mapQuery', {
      center: L.latLng(this.initLat, this.initLng),
      zoom: this.zoom,
      layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
    });
// Add a scale to the map    
    L.control.scale().addTo(this.aMap);
// Add an array of markers as a layer
//	var markers = L.layerGroup();
	this.markers.addTo(this.aMap);
// Add controls for the new layer
	L.control.layers( {}, { Markers: this.markers } ).addTo(this.aMap);
    
    this.aMap.on("click", e => {
		this.center = e.latlng;
		if ( this.centerMarker ) { 
			this.aMap.removeLayer(this.centerMarker);
			this.aMap.removeLayer(this.circle);
			this.markers.clearLayers();
		}
		this.circle = L.circle(this.center, { color: 'blue', fillColor: '#f03', fillOpacity: 0.1, radius: this.radius } );
		this.centerMarker = L.marker( this.center ).addTo( this.aMap );
		this.circle.addTo(this.aMap);
		console.log(JSON.stringify(this.center));
		this.query(this.radius,this.center["lng"],this.center["lat"]);
      }
	)
  }
  
  setRadius(r: number) {
	  this.radius = r;
	  if ( this.circle ) { this.aMap.removeLayer(this.circle) }
	  this.circle = L.circle(this.center, { color: 'blue', fillColor: '#f03', fillOpacity: 0.1, radius: this.radius } );
      this.circle.addTo(this.aMap);
	  console.log("radius = " + this.radius);
	  this.query(this.radius,this.center["lng"],this.center["lat"]);
  }
  
  // Da Fare: tracciare i punti nel raggio e poi inserire tutti i dati nel geojson iniziale (e mostrarne alcuni)
  // Ridurre l'ampiezza del titolo
  query (radius: number, long: number, lat: number) {
	let q = { coordinates:
				{ $geoWithin:
					{ $centerSphere: [ [ long, lat ], radius / ( 6.371 * ( 10 ** 6 ) ) ]
			}}};
    let obs = this.db.query(q);
    obs.subscribe({
      next: (features: any[]) => {
        console.log(features);
        document.getElementById('response').innerHTML = JSON.stringify(features);
        features.map( f => { 
			if ( f.type === "Point" ) {
				console.log(f);
				let m = L.marker([ f.coordinates[1], f.coordinates[0] ], { title: f.name }).addTo(this.aMap);
				this.markers.addLayer(m);
			}; 
		} );
//       (<HTMLInputElement>document.getElementById('response')).value = '';
        
      },
      error: (e: Error) => {
        console.error(e);
        document.getElementById('response').innerHTML = e.message;
//        (<HTMLInputElement>document.getElementById('response')).value = '';
        throw e.message;
      }
    }); 
  }
}
