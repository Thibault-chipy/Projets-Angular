import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../models/reservation.model';
import { ReservationService } from '../services/reservation.service';
import { MatDialog } from '@angular/material/dialog';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-modifier-reservation',
  standalone: false,
  templateUrl: './modifier-reservation.component.html',
  styleUrl: './modifier-reservation.component.scss'
})
export class ModifierReservationComponent implements OnInit {
  reservationForm!: FormGroup;
  reservation!: Reservation;
  id!: number;

  constructor(
    private router: Router,
    private reservationService: ReservationService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.router.getCurrentNavigation()?.extras.state?.['id'];
    this.reservationService.getReservation(this.id).subscribe((reservation) => {
      this.reservation = reservation;
      this.initForm();
    });
  }

  initForm() {
    this.reservationForm = this.formBuilder.group({
      nomClient: [this.reservation.nomClient],
      emailClient: [this.reservation.emailClient],
      jeuTitre: [this.reservation.jeuTitre],
      plateforme: [this.reservation.plateforme],
      dateReservation: [this.reservation.dateReservation],
      statutReservation: [this.reservation.statutReservation]
    });
  }

  onSubmit() {
    const updatedReservation = { ...this.reservation, ...this.reservationForm.value };
    this.reservationService.updateReservation(updatedReservation).subscribe(() => {
      this.router.navigate(['/reservations']);
    });
  }



}
