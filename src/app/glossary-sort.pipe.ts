import { Pipe, PipeTransform } from '@angular/core';
import { Glossaire } from './glossaire';

@Pipe({
  name: 'glossarySort'
})
export class GlossarySortPipe implements PipeTransform {

  transform(tab: Glossaire[], search: string): Glossaire[] {
    const res: Glossaire[] = [];

    if (search.length === 1) {
      for (let i = 0 ; i < tab.length ; i++) {
        if (tab[i].name.charAt(0).toLowerCase() === search.charAt(0).toLowerCase()) {
          res.push(tab[i]);
        }
      }
    } else {
      for (let i = 0 ; i < tab.length ; i++) {
        if (tab[i].name.toLowerCase().includes(search.toLowerCase())) {
          res.push(tab[i]);
        }
      }
    }

    return res;
  }

}
