import { Component, OnInit } from '@angular/core';

import { ApodService } from '../apod.service';
import { Apod } from '../apod';
import { Observable } from 'rxjs';

import * as $ from 'jquery';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent implements OnInit {

  private apodService: ApodService;
  public apods: Apod[];
  public today: Apod;

  constructor(param: ApodService) {
    this.apodService = param;
    this.apods = [];
    this.today = new Apod('https://apod.nasa.gov/apod/image/1505/Looming67P_Rosetta_960.jpg'
                , '1995-06-26', 'Page vide', 'Les données n\'ont pas encore été récupérés');
  }

  ngOnInit() {
    const date = new Date();
    // date.setDate(date.getDate()-1);
    // date.setFullYear(2015);
    // date.setMonth(1);
    // date.setDate(20);
    // date.setMonth(3);

    const tmp: Observable<Apod>[] = this.apodService.getWeekImages(date);

    for (let i = 0 ; i < tmp.length ; i++) {
      tmp[i].subscribe(
        (param: Apod) => {

          if (param.mediaType === 'image') {
            this.apods.push(param);
          } else {
            this.apods.push(new Apod('https://apod.nasa.gov/apod/image/1505/Looming67P_Rosetta_960.jpg'
                , '1995-06-26', 'Problème', 'Problème de récupération car le type d\'image ne correspond pas', 'unknown'));
          }

          this.apods.sort(function compare(a: Apod, b: Apod) {
            return (new Date(b.date).getTime() - new Date(a.date).getTime());
          });

          if (this.apods.length === 7) {
            this.today = this.apods[0];
            this.apods.shift();

            for (let j = 0 ; j < this.apods.length ; j++) {
              this.apods[j].setId(j + 1);
            }
          }
        }
      );
    }
  }

  public setDisplay(): void {
    $('.carousel-caption').toggleClass('d-md-block');
  }

}
