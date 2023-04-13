import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Indicadores } from './indicadores';
import { environment } from 'src/environments/environment';
import { lojas, response } from './lojas';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  constructor(private http: HttpClient) { }

  get(inicio?: string, fim?: string): Observable<Indicadores>
  {
    const url = `${environment.apiUrl}Indicadores?inicio=${inicio}&fim=${fim}&lojaid=59451`;
    return this.http.get<Indicadores>(url);
  }

  getLojas(): Observable<response>
  {
    const url = `${environment.apiUrl}Lojas`;
    return this.http.get<response>(url);
  }
}
