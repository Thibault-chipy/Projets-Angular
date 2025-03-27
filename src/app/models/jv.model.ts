export class JV{
    id!: string;
    titre!: string;
    plateforme!: string;
    genre!: string;
    developpeur!: string;
    dateSortie!: string;
    stock!: number;
    imageUrl!: string;

    constructor(id: string, titre: string, plateforme: string, genre: string, developpeur: string, dateSortie: string, stock: number, imageUrl: string){
        this.id = id;
        this.titre = titre;
        this.plateforme = plateforme;
        this.genre = genre;
        this.developpeur = developpeur;
        this.dateSortie = dateSortie;
        this.stock = stock;
        this.imageUrl = imageUrl;
    }
}