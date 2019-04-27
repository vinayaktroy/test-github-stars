import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrganisationService {

  constructor(private http: HttpClient) { }

  /**
   * get organisation info
   */
  getOrganisationInfo() {
    return this.http.get('https://api.github.com/orgs/angular')
  }

  /**
   * get members 
   */
  getMembers() {
    return this.http.get('https://api.github.com/orgs/angular/members')
  }
}
