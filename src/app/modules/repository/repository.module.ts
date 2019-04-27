import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryComponent } from './repository.component';
import { RepositoryService } from './repository.service';

const routes: Routes = [
  {
    path: "",
    component: RepositoryComponent,
  }
];


@NgModule({
  declarations: [RepositoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[RepositoryService]
})
export class RepositoryModule { }
