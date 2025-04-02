import { Component,OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { ReservationService } from '../services/reservation.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { JvService } from '../services/jv.service';
import { JV } from '../models/jv.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerInput, MatDatepickerModule } from '@angular/material/datepicker';


@Component({
  selector: 'app-new-reservation',
  standalone: false,
  templateUrl: './new-reservation.component.html',
  styleUrl: './new-reservation.component.scss',
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
  ]
})
export class NewReservationComponent implements OnInit{
formulaire!: FormGroup;
reservation!: Reservation;
thumbRegex!: RegExp;
listeJeux!: JV[];


  constructor(private reservationService: ReservationService, private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private jeuxService: JvService) {}

  ngOnInit(): void {
    this.thumbRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$');

    this.formulaire = this.formBuilder.group({
      nomClient: [null, Validators.required],
      emailClient: [null, [Validators.required, Validators.email]],
      jeuTitre: [null, Validators.required],
      plateforme: [null, Validators.required],
      dateReservation: [null, Validators.required],
      statutReservation: ["En attente", Validators.required],
    },{updateOn: 'blur'}); 

    this.formulaire.valueChanges.subscribe((value) => {
      this.reservation = {
        id: "0",
        nomClient: value.nomClient, 
        numeroTelCli: value.numeroTelClient,
        emailClient: value.emailClient,
        jeuTitre: value.jeuTitre,
        plateforme: value.plateforme,
        dateReservation: value.dateReservation,
        statutReservation: value.statutReservation,
      }
    });

    this.jeuxService.getJVs().subscribe((jeux) => {
      this.listeJeux = jeux;

      this.formulaire.get("jeuTitre")?.valueChanges.subscribe((selectedJeuTitre) => {
      const selectedJeu = this.listeJeux.find(jeu => jeu.titre === selectedJeuTitre);
      if (selectedJeu) {
        this.formulaire.get("plateforme")?.setValue(selectedJeu.plateforme);
      }
      else {
        this.formulaire.get("plateforme")?.setValue(null);
      }
    });
    });

  }

  onSubmit() {
    let newReservation: Reservation= {
      id: "0",
      nomClient: this.formulaire.get("nomClient")?.value,
      numeroTelCli: this.formulaire.get("numeroTelClient")?.value,
      emailClient: this.formulaire.get("emailClient")?.value,
      jeuTitre: this.formulaire.get("jeuTitre")?.value,
      plateforme: this.formulaire.get("plateforme")?.value,
      dateReservation: this.formulaire.get("dateReservation")?.value,
      statutReservation: this.formulaire.get("statutReservation")?.value,
    }

    this.reservationService.addReservation(newReservation).subscribe((reservation) => {
      this.router.navigate(['/reservations']);
    });

  }

}
