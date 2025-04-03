import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { ReservationService } from '../services/reservation.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SupprimerReservationComponent } from '../supprimer-reservation/supprimer-reservation.component';

@Component({
  selector: 'app-list-reservation',
  standalone: false,
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.scss']
})
export class ListReservationComponent implements OnInit {
  listeReservation!: Reservation[];
  colonnesAAfficher: string[] = ["idReservation", "nomClient", "emailClient", "jeuTitre", "plateforme", "dateReservation", "statutReservation", "Actions"];

  constructor(
    private reservationService: ReservationService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe((reservations) => {
      this.listeReservation = reservations;
    });
  }

  modifier(id: string) {
    this.router.navigate(['/modifier-reservation', id]);
  }

  supprimer(id: number) {
    const dialogRef = this.dialog.open(SupprimerReservationComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reservationService.deleteReservation(id).subscribe(() => {
          this.listeReservation = this.listeReservation.filter(reservation => reservation.id !== id);
        });
      }
    });
  }
}
