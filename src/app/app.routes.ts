import { Routes } from '@angular/router';
import { GamingComponent } from './page/gaming/gaming.component';
import { GamingdetalleComponent } from './components/gamingdetalle/gamingdetalle.component';
import { Error404Component } from './page/error404/error404.component';
import { HomeComponent } from './page/home/home.component';
import { GaminMaxiYminimoComponent } from './components/gamin-maxi-yminimo/gamin-maxi-yminimo.component';

export const routes: Routes = [
    {path : 'home',component:HomeComponent},
    {path : 'gaming',component:GamingComponent},
    {path : 'maxi',component:GaminMaxiYminimoComponent},
    {path : 'gamingDetalle/:idGaming',component:GamingdetalleComponent},

    {path: '' , redirectTo:'home',pathMatch:'full'},

    {path: '**' , component: Error404Component},
];
