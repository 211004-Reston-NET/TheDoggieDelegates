import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile, Main } from '../AngularModels/profile';
import { Favorite, } from '../AngularModels/favorite';

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  private endpoint:string = "https://pawpers.azurewebsites.net";

  constructor(private http:HttpClient) { }

  createProfile(profile:Profile)
  {
    return this.http.post<Main['$values']>(this.endpoint + "/Profile/Create", profile);
  }

  viewProfileFavoritesByProfileId(profileId: number)
  {
    return this.http.get<any>(this.endpoint + "/Favorite/SearchByProfile/" + profileId)
  }
  //Create view favorites method
}
