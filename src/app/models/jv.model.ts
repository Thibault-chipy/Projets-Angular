export class JV{
    id!: string;
    titre!: string;
    plateforme!: string;
    genre!: string;
    developpeur!: string;
    dateSortie!: string;
    stock!: number;

    constructor(id: string, titre: string, plateforme: string, genre: string, developpeur: string, dateSortie: string, stock: number){
        this.id = id;
        this.titre = titre;
        this.plateforme = plateforme;
        this.genre = genre;
        this.developpeur = developpeur;
        this.dateSortie = dateSortie;
        this.stock = stock;
    }
}