import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Glossaire } from './glossaire';

@Injectable({
  providedIn: 'root'
})

export class GlossaireService {

  private serviceHttp: Http;

  constructor(private http: Http) {
    this.serviceHttp = http;
  }

  public getJSON(): Observable<Glossaire[]> {
    return this.serviceHttp.get('assets/glossaire.json').pipe
    (
      map(
        (data: Response): Glossaire[] => {
          const raw: any = data.json();
          const items: Array<any> = raw;
          const definitions: Glossaire[] = [];

          for (let i = 0 ; i < items.length ; i++) {
            definitions.push(new Glossaire(items[i].id, items[i].name, items[i].description));
          }

          return definitions;
        }
      )
    );
  }
}
