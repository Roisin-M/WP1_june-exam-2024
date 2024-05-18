import { Routes } from '@angular/router';
import { DisplaydetailsComponent } from './components/displaydetails/displaydetails.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path:'',component:DisplaydetailsComponent},
    {path:'about',component:AboutComponent}
];
