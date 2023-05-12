import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lojas } from './lojas';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PickerService {

  constructor(private http: HttpClient) { }

  getLojas(): Observable<Lojas[]>
  {
    const url = `${environment.apiUrl}api/v1/lojas`;
    return this.http.get<Lojas[]>(url);
  }

  getTeste(lojaids: { } [])
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = `${environment.apiUrl}api/v1/lojass`;
    return this.http.post(url, lojaids , { headers } );
  }

}
