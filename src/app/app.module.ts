import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MenuBarComponent } from './components/includes/menu-bar/menu-bar.component';
import { HeaderComponent } from './components/includes/header/header.component';
import { SafehtmlPipe } from './pipes/safehtml.pipe';

@NgModule({
  declarations: [AppComponent, MenuBarComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SafehtmlPipe],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [MenuBarComponent, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
