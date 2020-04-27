import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeRouteComponent } from './home-route/home-route.component';
import { AboutRouteComponent } from './about-route/about-route.component';
import { ContactRouteComponent } from './contact-route/contact-route.component';
import { ProjectsRouteComponent } from './projects-route/projects-route.component';
import { NotFoundRouteComponent } from './not-found-route/not-found-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeRouteComponent,
    AboutRouteComponent,
    ContactRouteComponent,
    ProjectsRouteComponent,
    NotFoundRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
