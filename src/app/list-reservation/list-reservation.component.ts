import { Component,OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { ReservationService } from '../services/reservation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-reservation',
  standalone: false,
  templateUrl: './list-reservation.component.html',
  styleUrl: './list-reservation.component.scss'
})
export class ListReservationComponent implements OnInit {


  listeReservation!: Reservation[];


  constructor(private ReservationService: ReservationService, private router: Router){}

    ngOnInit(): void{
      this.ReservationService.getReservations().subscribe((reservations) =>{
        this.listeReservation=reservations;
      }
    
    )



    }

  
}
