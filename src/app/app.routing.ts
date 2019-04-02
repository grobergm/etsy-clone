import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';

const appRoutes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'page',
    component: PageComponent
  },
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
