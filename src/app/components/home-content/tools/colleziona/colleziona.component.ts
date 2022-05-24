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

  ngOnInit(): void {
	var aMap = L.map('mapid', {
      center: L.latLng(this.centerLat, this.centerLng),
      zoom: this.zoom,
      zoomControl: false,
      dragging: false,
      scrollWheelZoom: false,
      layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
    });
  }

}
