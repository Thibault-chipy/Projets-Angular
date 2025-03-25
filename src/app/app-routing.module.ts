import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JVComponent } from './jv/jv.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListJVComponent } from './list-jv/list-jv.component';


const routes: Routes = [
  {
    path: 'all',
    component: ListJVComponent
  },
  {
    path: 'jv/:id',
    component: JVComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
