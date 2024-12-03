import { Component } from '@angular/core';
import { DataDisplayComponent } from '../data-display/data-display.component';
import { MapComponent } from '../map/map.component';
import {StationTableComponent} from '../station-table/station-table.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DataDisplayComponent, MapComponent, StationTableComponent],
  templateUrl: './home.component.html',  // Reference to the separate HTML file
  styleUrls: ['./home.component.css']    // Reference to the separate CSS file
})
export class HomeComponent {}
