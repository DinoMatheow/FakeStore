import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'',
    loadChildren: ()=> import('./front-storeAPI/front-layout.routes').then(m => m.FrontLayoutroutes),
  }


];
