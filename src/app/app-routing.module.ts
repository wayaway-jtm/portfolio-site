import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRouteComponent } from './home-route/home-route.component';
import { ContactRouteComponent } from './contact-route/contact-route.component';
import { ProjectsRouteComponent } from './projects-route/projects-route.component';
import { AboutRouteComponent } from './about-route/about-route.component';
import { NotFoundRouteComponent } from './not-found-route/not-found-route.component';


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
        path: 'contact',
        component: ContactRouteComponent
    },
    {
        path: 'projects',
        component: ProjectsRouteComponent
    },
    {
        path: '',
        component: HomeRouteComponent
    },
    {
        path: '**',
        component: NotFoundRouteComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
