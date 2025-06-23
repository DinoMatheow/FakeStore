import { Routes } from '@angular/router';
import { FrontStoreApiLayoutComponent } from './layouts/front-storeApi-layout/front-storeApi-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const FrontLayoutroutes: Routes = [

  {
    path:'',
    component: FrontStoreApiLayoutComponent,
    children: [
      {
        path:'',
        component: HomePageComponent,
      }
    ]
  }
]


export default FrontLayoutroutes;