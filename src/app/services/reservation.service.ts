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

  getReservationByJV(jeuTitre:string): Observable<Reservation[]>{
    return this.http.get<Reservation[]>('http://localhost:3000/Reservations?jeuTitre='+jeuTitre);  
  }


  addReservation(reservation: Reservation): Observable<Reservation>{
    return this.http.post<Reservation>('http://localhost:3000/Reservations',reservation);  
  }
  updateReservation(reservation: Reservation): Observable<Reservation>{
    return this.http.put<Reservation>('http://localhost:3000/Reservations/'+reservation.id,reservation);  
  }
  deleteReservation(id:string): Observable<Reservation>{
    return this.http.delete<Reservation>('http://localhost:3000/Reservations/'+id);  
  }
}
