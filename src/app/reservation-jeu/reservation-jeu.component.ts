import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../models/reservation.model';
import { ReservationService } from '../services/reservation.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reservation-jeu',
  standalone: false,
  templateUrl: './reservation-jeu.component.html',
  styleUrl: './reservation-jeu.component.scss'
})
export class ReservationJeuComponent implements OnInit {

  listeReservation!: Reservation[];
  titreJeu!: string;

  constructor(private serviceReserv: ReservationService, private router: Router, private routerAct: ActivatedRoute ){}

  ngOnInit(): void {
    this.titreJeu= this.routerAct.snapshot.params['titre'];
    if (this.titreJeu !== undefined) {
      this.serviceReserv.getReservationByJV(this.titreJeu).subscribe((reservations) => {
        this.listeReservation = reservations;
      });
    }
  }
}
