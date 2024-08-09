import { Routes } from '@angular/router';
import { CulinaryComponent } from './culinary/culinary.component';
import { PlacesComponent } from './places/places.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { StreetshoppingComponent } from './streetshopping/streetshopping.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'culinary', component: CulinaryComponent },
    { path: 'places', component: PlacesComponent },
    { path: 'shopping', component: ShoppingComponent },
    { path: 'street-shopping', component: StreetshoppingComponent },
    // add a default route or 404 page if necessary
    { path: '', redirectTo: '/home', pathMatch: 'full' },

];
