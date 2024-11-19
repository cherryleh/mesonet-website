import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'mesonet-website';
    apiToken: string | undefined;
    data: any;

    constructor(
        private configService: ConfigService,
        private http: HttpClient
    ) {}

    ngOnInit(): void {
        this.configService.getApiConfig().subscribe({
            next: (config) => {
                this.apiToken = config.apiToken;
                this.fetchData();
            },
            error: (err) => console.error('Error fetching config:', err),
        });
    }

    fetchData(): void {
        const apiUrl = 'https://api.hcdp.ikewai.org/mesonet/db/measurements?location=hawaii&station_ids=0288&var_ids=RF_1_Tot300s&limit=10&local_tz=True';

        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.apiToken}`,
        });

        this.http.get(apiUrl, { headers }).subscribe({
            next: (response) => {
                this.data = response;
                console.log('Fetched Data:', this.data);
            },
            error: (err) => console.error('Error fetching data:', err),
            complete: () => console.log('API request complete'),
        });
    }
}
