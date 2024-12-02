import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-data-display',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
  providers: [DatePipe]
})

export class DataDisplayComponent implements OnInit {
  variables: { [key: string]: string | null } = {
    Rainfall: null,
    Temperature: null,
  };

  private variableMapping: { [key: string]: string } = {
    Rainfall: 'RF_1_Tot300s',
    Temperature: 'Tair_1_Avg',
    'Solar Radiation': 'SWin_1_Avg',
    'Soil Moisture': 'SM_1_Avg',
    'Wind Speed': 'WS_1_Avg'
  };

  latestTimestamp: string | null = null;
  objectKeys = Object.keys;

  constructor(private dataService: DataService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next: (response) => {
        if (response.length > 0) {
          // Assume all timestamps are the same; get the first one
          this.latestTimestamp = response[0].timestamp;
        }

        // Populate the variables object
        Object.keys(this.variableMapping).forEach((key) => {
          const variableData = response.find((item: any) => item.variable === this.variableMapping[key]);
          this.variables[key] = variableData ? variableData.value : 'N/A';
        });
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }

  getFormattedTimestamp(): string {
    return this.latestTimestamp
      ? this.datePipe.transform(this.latestTimestamp, 'MMM d, y, h:mm a') || ''
      : 'No timestamp available';
  }
}
