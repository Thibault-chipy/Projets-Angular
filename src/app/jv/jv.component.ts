import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { JV } from '../models/jv.model';
import { JvService } from '../services/jv.service';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../models/reservation.model';
import { ReservationService } from '../services/reservation.service';
@Component({  
  selector: 'app-jv',
  standalone: false,
  templateUrl: './jv.component.html',
  styleUrl: './jv.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class JVComponent implements OnInit{
  @Input() jvInput!: JV;
  listeReservation!: Reservation[];
  idJV!: string;
  constructor(private jvService: JvService, private routerAct: ActivatedRoute, private reserveServ: ReservationService) {}

  ngOnInit(): void {
    this.idJV = this.routerAct.snapshot.params['id'];
    if (this.idJV !== undefined) {
       this.jvService.getJV(this.idJV).subscribe((jv) => {
        this.jvInput = jv;

      });
    } 
  }

  // On va chercher les réservations du jeu vidéo
  getReservations() {
    this.reserveServ.getReservations().subscribe((reservations) => {
      this.listeReservation = reservations.filter((reservation) => reservation.jeuTitre === this.jvInput.titre);
    });
  }



}
