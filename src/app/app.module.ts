import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitlePageComponent } from './title-page/title-page.component';
import { GlossaireComponent } from './glossaire/glossaire.component';
import { MissionsComponent } from './missions/missions.component';

import { GlossaireService } from './glossaire.service';
import { ApodService } from './apod.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SunIdComponent } from './sun-id/sun-id.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    GlossaireComponent,
    MissionsComponent,
    NavbarComponent,
    FooterComponent,
    SunIdComponent,
    EvenementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path : '',
        component : TitlePageComponent
      },
      {
        path : 'sunid',
        component : SunIdComponent
      },
      {
        path : 'glossaire',
        component : GlossaireComponent
      },
      {
        path : 'missions',
        component : MissionsComponent
      }
    ])
  ],
  providers: [GlossaireService, ApodService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
