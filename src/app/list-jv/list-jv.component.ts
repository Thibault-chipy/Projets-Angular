import { Component, OnInit } from '@angular/core';
import { JvService } from '../services/jv.service';
import { JV } from '../models/jv.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-jv',
  standalone: false,
  templateUrl: './list-jv.component.html',
  styleUrl: './list-jv.component.scss',
})
export class ListJVComponent implements OnInit {
  listeJV!: JV[];

  constructor(private jvService: JvService,private router: Router) {}
  ngOnInit(): void {
    this.jvService.getJVs().subscribe((jvs) => {
      this.listeJV = jvs;
    });
  }
  
 /*
   Aller voir le jeu vidéo
 */
  voir(id: string) {
    this.router.navigateByUrl('jv/'+id);
  }
}
