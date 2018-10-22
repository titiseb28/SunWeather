import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  private serviceApi: ApiService;
  private tabImages: string[];
  public recherche: string;

  constructor(param: ApiService) {
    this.serviceApi = param;
    this.tabImages = [];
    this.recherche = 'earth';
  }

  ngOnInit() {
    this.callApi();
  }

  public callApi(): void {
    this.tabImages = [];

    this.serviceApi.getUrl('https://images-api.nasa.gov/search?q=' + this.recherche + '&media_type=image').subscribe(
      (param: any) => {
        const rep = param.json();

        for (let i = 0 ; i < rep.collection.items.length ; i++) {
          this.tabImages.push(rep.collection.items[i].links[0].href);
        }
      }
    );
  }

  public getImages(): string[] {
    return this.tabImages;
  }

}
