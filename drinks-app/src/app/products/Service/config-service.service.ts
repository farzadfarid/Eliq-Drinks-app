import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  private configUrl = 'assets/config/config.json';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
