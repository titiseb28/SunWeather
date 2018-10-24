import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { HistoryComponent } from './history/history.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from './gallery.service';
import { GlossarySortPipe } from './glossary-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    GlossaireComponent,
    MissionsComponent,
    NavbarComponent,
    FooterComponent,
    SunIdComponent,
    EvenementComponent,
    HistoryComponent,
    GalleryComponent,
    GlossarySortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
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
        path : 'glossary',
        component : GlossaireComponent
      },
      {
        path : 'history',
        component : HistoryComponent
      },
      {
        path : 'missions',
        component : MissionsComponent
      },
      {
        path : 'events',
        component : EvenementComponent
      },
      {
        path : 'gallery',
        component : GalleryComponent
      }
    ])
  ],
  providers: [GlossaireService, ApodService, ApiService, GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
