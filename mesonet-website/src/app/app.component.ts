import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet
import { CommonModule } from '@angular/common'; // Import CommonModule for the json pipe
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true, // Standalone component
  imports: [RouterOutlet, CommonModule], // Add CommonModule to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mesonet-website'; // Keep the title variable
  apiToken: string | undefined;
  data: any; // Store the data fetched from the API

  constructor(
    private configService: ConfigService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Fetch the API token
    this.configService.getApiConfig().subscribe((config) => {
      this.apiToken = config.apiToken; // Store the API token
      this.fetchData(); // Fetch data after the token is available
    });
  }

  // Function to make an API request using the token
  fetchData(): void {
    const apiUrl = 'https://api.example.com/data'; // Replace with your API endpoint

    this.http
      .get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${this.apiToken}`,
        },
      })
      .subscribe({
        next: (response) => {
          this.data = response;
          console.log('Fetched Data:', this.data);
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        },
        complete: () => {
          console.log('API request complete');
        }
      });
  }
}
