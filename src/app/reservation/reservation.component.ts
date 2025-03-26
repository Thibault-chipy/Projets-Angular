import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { ReservationService } from '../services/reservation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  standalone: false,
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class ReservationComponent implements OnInit {
  @Input() reservInput!: Reservation;
  idReserv!: string;

  constructor(
    private reservationService: ReservationService,
    private routerAct: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idReserv = this.routerAct.snapshot.params['id'];
    if (this.idReserv !== undefined) {
      this.reservationService
        .getReservation(this.idReserv)
        .subscribe((reserv) => {
          this.reservInput = reserv;
        });
    }
  }
}
