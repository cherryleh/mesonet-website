import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configUrl = 'assets/api_config.json'; // Path to the config file

  constructor(private http: HttpClient) {}

  // Fetch the API token
  getApiConfig(): Observable<any> {
    return this.http.get<any>(this.configUrl);
  }
}
