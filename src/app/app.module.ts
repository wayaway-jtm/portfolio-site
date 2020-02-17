import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutRouteComponent } from './about-route/about-route.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { WorksRouteComponent } from './works-route/works-route.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutRouteComponent,
    HomeRouteComponent,
    WorksRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
