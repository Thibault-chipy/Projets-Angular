import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JVComponent } from './jv/jv.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListJVComponent } from './list-jv/list-jv.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { HomeComponent } from './home/home.component';
import { NewJVComponent } from './new-jv/new-jv.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { MatButton } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifierReservationComponent } from './modifier-reservation/modifier-reservation.component';
import { ReservationJeuComponent } from './reservation-jeu/reservation-jeu.component';

const routes: Routes = [
  {
    path: 'all',
    component: ListJVComponent
  },
  {
    path: 'jv/:id',
    component: JVComponent
  },
  {
    path:'reservations',
    component: ListReservationComponent
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'new-reservation',
    component: NewReservationComponent
  },
  {
    path:'modifier-reservation/:id',
    component: ModifierReservationComponent
  },
  {
    path:"reservations-jeu/:titre",
    component: ReservationJeuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
