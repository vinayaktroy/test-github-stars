import { Component, OnInit } from '@angular/core';

import { AppService } from './../../app.service';
import { OrganisationService } from './organisation.service';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {

  organizationDetails: any;
  constructor(private organisationService: OrganisationService, private appService: AppService) { }

  ngOnInit() {
    this.getOrganisationInfo();
  }

  getOrganisationInfo() {
    this.appService.showLoader = true;
    this.organisationService.getOrganisationInfo().subscribe((response) => {
      this.appService.showLoader = false;
      this.organizationDetails = response;
    }, error => {
      this.appService.showLoader = false;
    })
  }

}
