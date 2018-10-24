import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Gallery } from '../gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  private serviceApi: ApiService;
  private tabImages: Gallery[];
  public recherche: string;

  constructor(param: ApiService) {
    this.serviceApi = param;
    this.tabImages = [];
    this.recherche = 'sun';
  }

  ngOnInit() {
    this.callApi();
  }

  public callApi(): void {
    this.tabImages = [];

    this.serviceApi.getUrl('https://images-api.nasa.gov/search?q=' + this.recherche + '&media_type=image').subscribe(
      (param: any) => {
        const rep = param.json();

        for (let i = 0 ; i < rep.collection.items.length && i < 50 ; i++) {
          let obj: Gallery = new Gallery(rep.collection.items[i].links[0].href);
          // this.tabImages.push(rep.collection.items[i].links[0].href);

          // Recherche de la grande image (appel d'un json)
          this.serviceApi.getUrl(rep.collection.items[i].href).subscribe(
            (param_href: any) => {
              const p = param_href.json();
              obj.imgBig = p[1];
              this.tabImages.push(obj);
            }
          );
        }
      }
    );
  }

  public getImages(): Gallery[] {
    return this.tabImages;
  }

}
