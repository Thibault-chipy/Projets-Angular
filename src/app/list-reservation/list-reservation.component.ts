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
  filtreStatut: string = '';
  jeuCherche: string = '';
  clientCherche: string = '';
  listeStatuts: string[] = ['En attente', 'Confirmee', 'Annulee'];
  listeJeux: string[] = [];
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

  // Filtrer par statut, titre de jeu et nom du client
  reservationsFiltrees(): Reservation[] {
    return this.listeReservation.filter(res => {
      const filtreStatutOK = this.filtreStatut === '' || res.statutReservation === this.filtreStatut;
      const filtreJeuOK = this.jeuCherche.trim() === '' || res.jeuTitre.toLowerCase().includes(this.jeuCherche.toLowerCase());
      const filtreClientOK = this.clientCherche.trim() === '' || res.nomClient.toLowerCase().includes(this.clientCherche.toLowerCase());
      return filtreStatutOK && filtreJeuOK && filtreClientOK;
    });
  }
  

}
