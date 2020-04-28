import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
