import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { JVComponent } from './jv/jv.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListJVComponent } from './list-jv/list-jv.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { HomeComponent } from './home/home.component';
import { MatButton } from '@angular/material/button';
import { NewJVComponent } from './new-jv/new-jv.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatDialogModule,MatDialog} from '@angular/material/dialog';
import { SupprimerReservationComponent } from './supprimer-reservation/supprimer-reservation.component';
import { ModifierReservationComponent } from './modifier-reservation/modifier-reservation.component';
import { ReservationJeuComponent } from './reservation-jeu/reservation-jeu.component';
import { MatRadioModule,MatRadioGroup } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    JVComponent,
    HeaderComponent,
    FooterComponent,
    ReservationComponent,
    ListJVComponent,
    ListReservationComponent,
    HomeComponent,
    NewJVComponent,
    NewReservationComponent,
    SupprimerReservationComponent,
    ModifierReservationComponent,
    ReservationJeuComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButton,
    MatDatepicker,
    MatDatepickerModule,
    MatDialogModule,
    MatRadioModule,
    MatRadioGroup,
    FormsModule,  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
