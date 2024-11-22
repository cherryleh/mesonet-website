import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataProcessorService, Measurement } from './data-processor.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit {
    title = 'mesonet-website';
    apiToken: string | undefined;
    data: Measurement[] = []; // Raw API data
    rainfall: string | undefined; // Rainfall value
    temperature: string | undefined; // Temperature value
    timestamp: string | undefined;

    constructor(
        private configService: ConfigService,
        private http: HttpClient
    ) {}

    ngOnInit(): void {
        this.configService.getApiConfig().subscribe({
            next: (config) => {
                this.apiToken = config.apiToken;
                if (this.apiToken) {
                    this.fetchData();
                } else {
                    console.error('API token is missing!');
                }
            },
            error: (err) => console.error('Error fetching config:', err),
        });
    }

    // #Tair_1_Avg
    // #RF_1_Tot300s
    // #SM_1_Avg
    // #WS_1_Avg
    // #SWin_1_Avg

    fetchData(): void {
        const apiUrl = 'https://api.hcdp.ikewai.org/mesonet/db/measurements?location=hawaii&station_ids=0288&var_ids=RF_1_Tot300s,Tair_1_Avg&limit=2&local_tz=True';
        
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.apiToken}`,
        });

        this.http.get<Measurement[]>(apiUrl, { headers }).subscribe({
            next: (response) => {
                this.data = response;
                const processedData = DataProcessorService.extractValues(this.data);
                this.rainfall = processedData.rainfall;
                this.temperature = processedData.temperature;
                this.timestamp = processedData.timestamp;
                //console.log('Fetched Data:', this.data);  // Log the fetched data
            },
            error: (err) => console.error('Error fetching data:', err),  // Log any error
            complete: () => console.log('API request complete'),  // Log when the request is complete
        });
    }
}
