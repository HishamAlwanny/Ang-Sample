import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgTemplateComponent } from './ng-template/ng-template.component';

const routes: Routes = [
    {
        path: 'crud',
        loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule),
    },
    { path: 'temp', component: NgTemplateComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
