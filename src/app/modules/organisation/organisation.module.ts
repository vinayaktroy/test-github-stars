import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationComponent } from './organisation.component';
import { Routes, RouterModule } from '@angular/router';
import { OrganisationService } from './organisation.service';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { MembersComponent } from './components/members/members.component';
import { UpadteInfoComponent } from './components/upadte-info/upadte-info.component';
import { ReactiveFormsModule } from '@angular/forms'
const routes: Routes = [
  {
    path: "",
    component: OrganisationComponent,
  },
  {
    path:"members",
    component:MembersComponent
  }
];

@NgModule({
  declarations: [OrganisationComponent, InfoCardComponent, MembersComponent, UpadteInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [OrganisationService]
})
export class OrganisationModule { }
