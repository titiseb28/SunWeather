export class Gallery {
    public imgPreview: string;
    public imgBig: string;

    constructor(imgPreview: string, imgBig: string = imgPreview) {
        this.imgPreview = imgPreview;
        this.imgBig = imgBig;
    }
}
