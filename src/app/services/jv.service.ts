import { Injectable } from '@angular/core';
import { JV } from '../models/jv.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JvService {

  constructor(private http: HttpClient) { }

  getJVs(): Observable<JV[]> {
    return this.http.get<JV[]>('http://localhost:3000/JVS');  
  };

  getJV(id: string): Observable<JV> {
    return this.http.get<JV>('http://localhost:3000/JVS/' + id);
  }
}
