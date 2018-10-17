export class Evenement {
    private nom: string;
    private date: string;
    private details: string;
    private definition: string;
    private imageUrl: string;

    constructor(nom: string = 'Evenement', date: string = '1995-06-26', details: string = '', definition = '',
                 imageUrl: string = 'https://via.placeholder.com/150x150') {
        this.nom = nom;
        this.date = date;
        this.details = details;
        this.definition = definition;
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

    public getDefinition(): string {
        return this.definition;
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

    public setDefinition(def: string) {
        this.definition = def;
    }

    public setImageUrl(url: string) {
        this.imageUrl = url;
    }
}
