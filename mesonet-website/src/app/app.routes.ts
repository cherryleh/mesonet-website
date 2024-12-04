import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'about', component: AboutComponent }, // About page route
    { path: 'data-display', component: DataDisplayComponent }, // Data display route
    { path: '**', component: NotFoundComponent } // Catch-all route for invalid paths
];
