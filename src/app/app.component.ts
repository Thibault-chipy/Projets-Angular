import { Component } from '@angular/core';
import { JVComponent } from './jv/jv.component';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GestionJV';
}
