import { Pipe, PipeTransform } from '@angular/core';
import { Glossaire } from './glossaire';

@Pipe({
  name: 'glossarySort'
})
export class GlossarySortPipe implements PipeTransform {

  transform(tab: Glossaire[], search: string): Glossaire[] {
    const res: Glossaire[] = [];

    for (let i = 0 ; i < tab.length ; i++) {
      if (tab[i].name.toLowerCase().includes(search.toLowerCase())) {
        res.push(tab[i]);
      }
    }

    return res;
  }

}
