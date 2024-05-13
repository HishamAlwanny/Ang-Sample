import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './crud/home/home.component';
import { DetailsComponent } from './crud/details/details.component';
import { CreateComponent } from './crud/create/create.component';
import { UpdateComponent } from './crud/update/update.component';

const routes: Routes = [
    {path: 'crud', redirectTo:'crud/home'},
    {path: 'crud/home', component: HomeComponent},
    {path: 'crud/details/:productId', component: DetailsComponent},
    {path: 'crud/create', component: CreateComponent},
    {path: 'crud/update/:productId', component: UpdateComponent},
    {
        path: 'crud',
        loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule),
    },
    {
        path: 'crud/home',
        loadChildren: () => import('./crud/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'crud/details/:productId',
        loadChildren: () => import('./crud/details/details.component').then(m => m.DetailsComponent),
    },
    {
        path: 'crud/create',
        loadChildren: () => import('./crud/create/create.component').then(m => m.CreateComponent),
    },///HERE You were fixing the routing
    {
        path: 'crud/create',
        loadChildren: () => import('./crud/create/create.component').then(m => m.CreateComponent),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
