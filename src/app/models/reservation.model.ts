export class Reservation{
id!: number;
nomClient!: string;
emailClient!: string;
numeroTelCli!: string;
jeuTitre!:string;
plateforme!:string;
dateReservation!:Date
statutReservation!:string;

constructor(id: number,nomClient: string,emailClient: string,numeroTelCli: string,jeuTitre: string,plateforme: string,dateReservation: Date,statutReservation: string){
    this.id = id;
    this.nomClient = nomClient;
    this.emailClient = emailClient;
    this.numeroTelCli = numeroTelCli;
    this.jeuTitre = jeuTitre;
    this.plateforme = plateforme;
    this.dateReservation = dateReservation;
    this.statutReservation = statutReservation;
}

}

