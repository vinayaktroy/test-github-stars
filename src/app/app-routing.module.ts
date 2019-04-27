import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'organization',
    loadChildren: './modules/organisation/organisation.module#OrganisationModule'
  },
  {
    path: 'repository',
    loadChildren: './modules/repository/repository.module#RepositoryModule'
  },
  {
    path: '',
    redirectTo: '/organization',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/organization',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }