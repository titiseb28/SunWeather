import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Apod } from './apod';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private serviceHttp: Http;

  constructor(private http: Http) {
    this.serviceHttp = http;
  }

  public getWeekImages(date: Date = new Date()): Observable<Apod>[] {
    const obs: Observable<Apod>[] = [];

    for (let i = 0 ; i < 7 ; i++) {
      obs.push(this.getJSON(date));
      date.setDate(date.getDate() - 1);
    }

    return obs;
  }

  public getJSON(date: Date): Observable<Apod> {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();

    // tslint:disable-next-line:max-line-length
    const url = 'https://api.nasa.gov/planetary/apod?api_key=T6K4zaSyEepWvVuwGkgdh682F7STzJA1ZypdueZ6&hd=False&date=' + y + '-' + m + '-' + d;

    console.log(url);

    return this.serviceHttp.get(url).pipe
    (
      map(
        (data: Response): Apod => {
          const raw: any = data.json();
          let info: Apod;
          info = new Apod(raw.url, raw.date, raw.title, raw.explanation, raw.media_type);

          return info;
        }
      )
    );
  }
}
