export class Apod 
{
    public url : string;
    public date : string;
    public title : string;
    public explanation : string;
    public id : number;
    public mediaType : string;

    constructor(url : string, date : string, title : string, explanation : string, media_type : string = "image")
    {
        this.url = url;
        this.date = date;
        this.title = title;
        this.explanation = explanation;
        this.id = 0;
        this.mediaType = media_type;
    }

    public setId(n : number)
    {
        this.id = n;
    }
}
