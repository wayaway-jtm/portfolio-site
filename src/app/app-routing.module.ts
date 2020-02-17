import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRouteComponent } from './home-route/home-route.component';
import { AboutRouteComponent } from './about-route/about-route.component';
import { WorksRouteComponent } from './works-route/works-route.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeRouteComponent
  },
  {
    path: 'about',
    component: AboutRouteComponent
  },
  {
    path: 'works',
    component: WorksRouteComponent
  },
  {
    path: '',
    component: HomeRouteComponent
  },
  {
    path: '*',
    component: HomeRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
