export class Evenement {
    private nom: string;
    private date: string;
    private details: string;
    private imageUrl: string;

    constructor(nom: string = 'Evenement', date: string = '1995-06-26', details: string = '',
                 imageUrl: string = 'https://via.placeholder.com/150x150') {
        this.nom = nom;
        this.date = date;
        this.details = details;
        this.imageUrl = imageUrl;
    }

    public getNom(): string {
        return this.nom;
    }

    public getDate(): string {
        return this.date;
    }

    public getDetails(): string {
        return this.details;
    }

    public getImageUrl(): string {
        return this.imageUrl;
    }

    public setNom(nom: string): void {
        this.nom = nom;
    }

    public setDate(date: string): void {
        this.date = date;
    }

    public setDetails(details: string) {
        this.details = details;
    }

    public setImageUrl(url: string) {
        this.imageUrl = url;
    }
}
