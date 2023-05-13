import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeshBoardService {

  constructor(private http: HttpClient) { }

  getKpis(inicio: string, fim: string)
  {
    const url = `${environment.apiUrl}api/v1/home/kpis?inicio=${inicio}&fim=${fim}`;
    return this.http.get(url);
  }

}
