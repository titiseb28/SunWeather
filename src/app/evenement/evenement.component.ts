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
    this.evenements.push(new Evenement('Coronal Mass Ejection (CME)', '2018-10-16', '', '',
      'http://3.bp.blogspot.com/-PawLTtqpEVg/VBH1mx4aADI/AAAAAAAAaPM/H9YlBXtzrhE/s1600/CoronalMassEjection.jpg'));
    this.evenements.push(new Evenement('Geomagnetic Storm (GST)', '2018-10-05', '', '',
      'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/whyweshouldw.jpg'));
    this.evenements.push(new Evenement('Solar Flare (FLR)', '2016-05-24', '', '',
      'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/10/17/Pictures/_b66bd2e2-b30e-11e7-8b25-96a837358dfc.jpg'));
    this.evenements.push(new Evenement('Solar Energetic Particle (SEP)', '2018-10-05', '', '',
      'https://kentronintellectresearchvault.files.wordpress.com/2013/04/solar-dynamic-thermal-magnetics.jpg'));
    this.evenements.push(new Evenement('Magnetopause Crossing (MPC)', '2018-10-05', '', '',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXh1Qu0ENHLSnnjjawNem6AV_RBojLT0YoijWnQlljsLe7Wsf'));
    this.evenements.push(new Evenement('Hight Speed Stream (HSS)', '2018-10-05', '', '',
      'http://www.heartcom.org/CoronalHole.png'));


    this.evenements[0].setDefinition('a large-scale solar event involving an ejection of hot plasma ' +
      'that may accelerate charged particles and travel as far as the earth\'s orbit, ' +
      'preceded by a shock front that may create a magnetic storm on earth. Abbreviation: CME');

    this.evenements[1].setDefinition('a marked temporary disturbance of the earth\'s magnetic field held to be related to sunspots');

    this.evenements[2].setDefinition('A solar flare is an intense burst of radiation '
      + 'coming from the release of magnetic energy associated with sunspots. '
      + 'Flares are our solar system’s largest explosive events. '
      + 'They are seen as bright areas on the sun and they can last from minutes to hours. '
      + 'We typically see a solar flare by the photons (or light) it releases, at most every wavelength of the spectrum. '
      + 'The primary ways we monitor flares are in x-rays and optical light. '
      + 'Flares are also sites where particles (electrons, protons, and heavier particles) are accelerated.');

    this.evenements[3].setDefinition('Energetic charged particles (such as electrons and protons) '
      + 'traveling much faster than ambient particles in the space plasma, at a fraction of the '
      + 'speed of light (relativistic!). They can travel from the Sun to the Earth in one hour or less!'
      + 'The term “SEP” usually refers to protons.');

    this.evenements[4].setDefinition('The magnetic boundary between the Earth\'s field and the solar wind, '
      + 'named the magnetopause, has a bullet-shaped front, gradually changing into a cylinder. '
      + 'Its cross-section is approximately circular.');

    this.evenements[5].setDefinition('High speed solar wind streams are formed by higher speed solar wind '
      + 'originating from coronal holes. Higher speed streams are less tightly wound in the Parker '
      + 'spiral compared to slower ones, and at various distances the faster solar wind overtakes the slower wind ahead of it.');

    // Récupération du dernier CME
    this.apiService.getUrl('https://api.nasa.gov/DONKI/CME?api_key=T6K4zaSyEepWvVuwGkgdh682F7STzJA1ZypdueZ6').subscribe(
      (param: any) => {
        const repJs = param.json();
        this.evenements[0].setDate(repJs[0].startTime);
        this.evenements[0].setDetails(repJs[0].note);
      }
    );

    // Récupération du dernier GST
    this.apiService.getUrl(
      'https://api.nasa.gov/DONKI/GST?startDate=2018-01-01&api_key=T6K4zaSyEepWvVuwGkgdh682F7STzJA1ZypdueZ6').subscribe(
      (param: any) => {
        const repJs = param.json();
        this.evenements[1].setDate(repJs[repJs.length - 1].startTime);
      }
    );

    // Récupération du dernier FLR
    this.apiService.getUrl(
      'https://api.nasa.gov/DONKI/FLR?startDate=2018-01-01&api_key=T6K4zaSyEepWvVuwGkgdh682F7STzJA1ZypdueZ6').subscribe(
      (param: any) => {
        const repJs = param.json();
        this.evenements[2].setDate(repJs[repJs.length - 1].beginTime);
        // this.evenements[2].setDetails('Begin time : ' +
        //  repJs[repJs.length - 1].beginTime + '\nPeak time : ' + repJs[repJs.length - 1].peakTime
        //  + '\nEnd time : ' + repJs[repJs.length - 1].endTime);
      }
    );

    // Récupération du dernier SEP
    this.apiService.getUrl(
      'https://api.nasa.gov/DONKI/SEP?startDate=2017-01-01&api_key=T6K4zaSyEepWvVuwGkgdh682F7STzJA1ZypdueZ6').subscribe(
      (param: any) => {
        const repJs = param.json();
        this.evenements[3].setDate(repJs[repJs.length - 1].eventTime);
        this.evenements[3].setDetails('Display name : ' + repJs[repJs.length - 1].instruments[0].displayName);
      }
    );

    // Récupération du dernier MCP
    this.apiService.getUrl(
      'https://api.nasa.gov/DONKI/MPC?startDate=2018-01-01&api_key=T6K4zaSyEepWvVuwGkgdh682F7STzJA1ZypdueZ6').subscribe(
      (param: any) => {
        const repJs = param.json();
        this.evenements[4].setDate(repJs[repJs.length - 1].eventTime);
        this.evenements[4].setDetails('Display name : ' + repJs[repJs.length - 1].instruments[0].displayName);
      }
    );

    // Récupération du dernier MCP
    this.apiService.getUrl(
      'https://api.nasa.gov/DONKI/HSS?startDate=2018-10-01&api_key=T6K4zaSyEepWvVuwGkgdh682F7STzJA1ZypdueZ6').subscribe(
      (param: any) => {
        const repJs = param.json();
        this.evenements[5].setDate(repJs[repJs.length - 1].eventTime);
        this.evenements[5].setDetails('Display name : ' + repJs[repJs.length - 1].instruments[0].displayName);
      }
    );
  }
}
