import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JvService } from '../services/jv.service';
import { JV } from '../models/jv.model';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-list-jv',
  templateUrl: './list-jv.component.html',
  styleUrl: './list-jv.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ListJVComponent implements OnInit {
  listeJV: JV[] = [];            
  listeJVFiltree: JV[] = [];    
  listePlateformes: string[] = []; 
  filtrePlateforme: string = ''; 
  jeuCherche: string = '';

  constructor(private jvService: JvService, private router: Router) {}

  ngOnInit(): void {
    this.jvService.getJVs().subscribe((jvs) => {
      this.listeJV = jvs;
      this.listeJVFiltree = jvs; 
      this.listePlateformes = this.getPlateformes();
    });
  }

  // Obtenir la liste unique des plateformes
  getPlateformes(): string[] {
    return Array.from(new Set(this.listeJV.map(jv => jv.plateforme)));
  }

  // Filtrer par plateforme
  filtrerParPlateforme() {
    if (this.filtrePlateforme) {
      this.listeJVFiltree = this.listeJV.filter(jv => jv.plateforme === this.filtrePlateforme);
    } else {
      this.listeJVFiltree = this.listeJV; 
    }
  }
// Filtrer par titre
  filtrerParTitre() {
    if (this.jeuCherche && this.jeuCherche.trim() !== '') {
      this.listeJVFiltree = this.listeJV.filter(jv => 
        jv.titre.toLowerCase().includes(this.jeuCherche.toLowerCase())
      );
    } else {
      this.listeJVFiltree = [...this.listeJV];
    }
  }
  


  // Voir les détails d'un jeu
  voir(id: string) {
    this.router.navigateByUrl('jv/' + id);
  }
}
