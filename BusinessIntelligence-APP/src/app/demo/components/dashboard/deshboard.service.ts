import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { comparativo, kpis } from './deshboard';

@Injectable({
  providedIn: 'root'
})
export class DeshBoardService {

  constructor(private http: HttpClient) { }

  getKpis(request: any) : Observable<kpis>
  {
    const url = `${environment.apiUrl}api/v1/home/kpis`;
    return this.http.post<kpis>(url, request);
  }

  getComparativo(request: any) : Observable<comparativo>
  {
    const url = `${environment.apiUrl}api/v1/home/comparativo`;
    return this.http.post<comparativo>(url, request);
  }
  
}
