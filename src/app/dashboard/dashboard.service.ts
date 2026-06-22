import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://test-demo.aemenersol.com/api';

  constructor(private http: HttpClient) {}

  getDashboardData() {
    return this.http.get<any>(`${this.apiUrl}/dashboard`);
  }
}
