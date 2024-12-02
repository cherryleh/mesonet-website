import { Component } from '@angular/core';
import { DataDisplayComponent } from '../data-display/data-display.component'; // Correct path

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DataDisplayComponent],
  templateUrl: './home.component.html',  // Reference to the separate HTML file
  styleUrls: ['./home.component.css']    // Reference to the separate CSS file
})
export class HomeComponent {}
