import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataDisplayComponent } from './data-display/data-display.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'about', component: AboutComponent }, // About page route
    {path: 'data-display', component: DataDisplayComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback route
  ];