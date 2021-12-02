import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile, Main } from '../AngularModels/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  private endpoint:string = "https://pawpers.azurewebsites.net";

  constructor(private http:HttpClient) { }

  createProfile(profile:Profile)
  {
    return this.http.post<Main['$values']>(this.endpoint + "/Profile/Add", profile);
  }
}
