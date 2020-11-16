import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './header/head/head.component';
import { HglobalComponent } from './header/hglobal/hglobal.component';
import { MenuComponent } from './header/menu/menu.component';
import { MglobalComponent } from './main/mglobal/mglobal.component';
import { SurmesureComponent } from './main/surmesure/surmesure.component';
import { WordpressComponent } from './main/wordpress/wordpress.component';
import { MaintenanceComponent } from './main/maintenance/maintenance.component';
import { PresentationComponent } from './main/presentation/presentation.component';
import { FoireauxquestionsComponent } from './main/foireauxquestions/foireauxquestions.component';
import { EtapecreationComponent } from './main/etapecreation/etapecreation.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeadComponent,
    HglobalComponent,
    MenuComponent,
    MglobalComponent,
    SurmesureComponent,
    WordpressComponent,
    MaintenanceComponent,
    PresentationComponent,
    FoireauxquestionsComponent,
    EtapecreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
