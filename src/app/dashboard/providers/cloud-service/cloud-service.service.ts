import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from '../../../shared/constant/urls';
import { LinkedServicesResponse } from '../../../app.interface';

@Injectable({
  providedIn: 'root'
})
export class CloudServiceService {

  constructor(
      private http:HttpClient
  ) { }

  getLinkedServices() {
      return this.http.get<LinkedServicesResponse>(urls.linkedServices);
  }
}
