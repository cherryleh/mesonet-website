import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';  // Import CommonModule


@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  data: any[] = []; // Replace with the appropriate type if your API has a specific data structure
  isLoading: boolean = true; // For showing a loading state
  errorMessage: string | null = null; // For handling errors

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.dataService.getData().subscribe({
      next: (response) => {
        this.data = response; // Adjust this based on your API response structure
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.errorMessage = 'Failed to load data. Please try again later.';
        this.isLoading = false;
      }
    });
  }
}
