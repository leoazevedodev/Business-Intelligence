import { HttpClient } from '@angular/common/http';
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

}
