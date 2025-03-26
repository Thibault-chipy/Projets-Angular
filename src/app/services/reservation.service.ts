import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Reservation } from "../models/reservation.model"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient ) { }


  getReservations(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>('http://localhost:3000/Reservations');  
  }

  getReservation(id:string): Observable<Reservation>{
    return this.http.get<Reservation>('http://localhost:3000/Reservations/'+id);  

  } 

}
