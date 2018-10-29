import { Component, OnInit } from '@angular/core';
import { GlossaireService } from '../glossaire.service';
import { Glossaire } from '../glossaire';

@Component({
  selector: 'app-glossaire',
  templateUrl: './glossaire.component.html',
  providers: [ GlossaireService ],
  styleUrls: ['./glossaire.component.css']
})


export class GlossaireComponent implements OnInit {

  public definitions: Glossaire[];
  private glossaireService: GlossaireService;
  public recherche: string;

  constructor(glossaire: GlossaireService) {
    this.glossaireService = glossaire;
    this.definitions = [];
    this.recherche = '';
  }

  ngOnInit() {
    this.glossaireService.getJSON().subscribe(
      (param: Glossaire[]) => {
        this.definitions = param;
        this.definitions.sort(function(a, b) {
          return a.name.localeCompare(b.name);
        });
      }
    );
  }
}
