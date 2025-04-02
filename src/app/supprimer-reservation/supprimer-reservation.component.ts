import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-supprimer-reservation',
  template: `
    <h2 mat-dialog-title>Confirmation</h2>
    <mat-dialog-content>Voulez-vous vraiment supprimer cette réservation ?</mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onAnnuler()">Annuler</button>
      <button mat-button color="warn" (click)="onConfirmer()">Supprimer</button>
    </mat-dialog-actions>
  `,
  standalone: false
})
export class SupprimerReservationComponent {
  constructor(
    public dialogRef: MatDialogRef<SupprimerReservationComponent>
  ) {}

  onAnnuler(): void {
    this.dialogRef.close(false);
  }

  onConfirmer(): void {
    this.dialogRef.close(true);
  }
}
