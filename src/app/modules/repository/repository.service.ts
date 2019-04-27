import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RepositoryService {
  constructor(private http: HttpClient) { }

  /**
   * get repo list
   */
  getRepository() {
    return this.http.get('https://api.github.com/orgs/angular/repos')
  }
}
