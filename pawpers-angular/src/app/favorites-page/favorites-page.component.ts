import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { ProfileApiService } from '../services/profile-api.service';
import {Profile} from '../AngularModels/profile';
import {Main, Favorite} from '../AngularModels/favorite';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

    profile: any = [];
  constructor(private profileApi: ProfileApiService, private router:Router, private route: ActivatedRoute) { 
    let profileId = Number(this.route.snapshot.paramMap.get("id"))
    this.getProfileWithFavorites(profileId)
  }

  ngOnInit(): void {
  }

  getProfileWithFavorites(profileId: number)
  {
    this.profileApi.viewProfileFavoritesByProfileId(profileId).subscribe(response => {
      this.profile = response


    })
  }

}
