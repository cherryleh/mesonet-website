import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Directly using the API URL in the service file
  private apiUrl = 'https://api.hcdp.ikewai.org/mesonet/db/measurements?location=hawaii&station_ids=0288&var_ids=RF_1_Tot300s,Tair_1_Avg&limit=2&local_tz=True';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    // Include API token as a query parameter
    const headers = new HttpHeaders().set('Authorization', `Bearer ${environment.apiToken}`); // Your API token here
    console.log('API Token from environment:', environment.apiToken);
    return this.http.get(this.apiUrl, { headers });

    // Optionally, you could include the API key as a header
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${environment.apiKey}`);
    // return this.http.get(this.apiUrl, { headers });
  }
}
