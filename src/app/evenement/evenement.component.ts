import { Component, OnInit } from '@angular/core';

import { Evenement } from '../evenement';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  evenements: Evenement[];
  private apiService: ApiService;

  constructor(param_api: ApiService) {
    this.apiService = param_api;
    this.evenements = new Array<Evenement>();
  }

  ngOnInit() {
    this.evenements.push(new Evenement('Coronal Mass Ejection (CME)', '2018-10-16', '',
      'http://3.bp.blogspot.com/-PawLTtqpEVg/VBH1mx4aADI/AAAAAAAAaPM/H9YlBXtzrhE/s1600/CoronalMassEjection.jpg'));
    this.evenements.push(new Evenement('Geomagnetic Storm (GST)', '2018-10-05', '',
      'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/whyweshouldw.jpg'));
    this.evenements.push(new Evenement('Solar Flare (FLR)', '2016-05-24', 'Evénement inconnu',
      'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/10/17/Pictures/_b66bd2e2-b30e-11e7-8b25-96a837358dfc.jpg'));
    this.evenements.push(new Evenement('Solar Energetic Particle (SEP)', '2018-10-05', '',
      'https://kentronintellectresearchvault.files.wordpress.com/2013/04/solar-dynamic-thermal-magnetics.jpg'));
    this.evenements.push(new Evenement('Magnetopause Crossing (MPC)', '2018-10-05', '',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXh1Qu0ENHLSnnjjawNem6AV_RBojLT0YoijWnQlljsLe7Wsf'));
    this.evenements.push(new Evenement('Hight Speed Stream (HSS)', '2018-10-05', '',
      'http://www.heartcom.org/CoronalHole.png'));


    this.evenements[0].setDetails(this.getLoremIpsum());
    this.evenements[1].setDetails(this.getLoremIpsum());
    this.evenements[2].setDetails(this.getLoremIpsum());
    this.evenements[3].setDetails(this.getLoremIpsum());
    this.evenements[4].setDetails(this.getLoremIpsum());
    this.evenements[5].setDetails(this.getLoremIpsum());

    // Récupération du dernier CME
    this.apiService.getUrl('https://api.nasa.gov/DONKI/CME?api_key=T6K4zaSyEepWvVuwGkgdh682F7STzJA1ZypdueZ6').subscribe(
      (param: any) => {
        const repJs = param.json();
        this.evenements[0].setDate(repJs[0].startTime);
        this.evenements[0].setDetails(repJs[0].note);
      }
    );

    // Récupération du dernier CME
    this.apiService.getUrl(
      'https://api.nasa.gov/DONKI/GST?startDate=2018-01-01&api_key=T6K4zaSyEepWvVuwGkgdh682F7STzJA1ZypdueZ6').subscribe(
      (param: any) => {
        const repJs = param.json();
        console.log(repJs[repJs.length - 1].startTime);
        this.evenements[1].setDate(repJs[repJs.length - 1].startTime);
        // this.evenements[1].setDetails(repJs[0].note);
      }
    );
  }

  public getLoremIpsum(): string {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Pellentesque quis eros tristique, varius nisi quis, hendrerit sem. In hac habitasse platea dictumst. \
    Nulla egestas risus sed erat commodo, sit amet finibus nibh aliquet.\
     Ut blandit eget elit rhoncus maximus. Ut in hendrerit dui. \
    Mauris quis pellentesque ligula. Sed euismod dictum aliquam. Mauris massa nulla,\
     posuere non semper sit amet, dictum non felis. In aliquam justo lectus, \
     ut sagittis nisl mattis eget. In sapien tellus, rhoncus congue mi sed, viverra \
     blandit lectus. Aliquam bibendum massa nisi, non blandit elit consectetur \
     a. Nunc ultricies magna augue, vitae faucibus arcu faucibus a. \
    Vivamus nec augue a tellus viverra porta. Proin justo est, elementum ac mollis at, egestas eu metus.';
  }

}
