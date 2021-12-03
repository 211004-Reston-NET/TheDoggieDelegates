import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileApiService } from '../services/profile-api.service';
import { Profile } from '../AngularModels/profile';
import { Main, Favorite } from '../AngularModels/favorite';
import { DogSearchService } from '../services/dog-search.service';
import { Animal } from '../dog-search/dog-search-model';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  favorites: any= []
  dog: any = {}

  constructor(private dogSearchService: DogSearchService, private profileApi: ProfileApiService, private router: Router, private route: ActivatedRoute) {
    let profileId = Number(this.route.snapshot.paramMap.get("id"))
    this.getProfileWithFavorites(profileId) 
  }

  ngOnInit(): void {
    console.log(this.favorites)
  }

  getProfileWithFavorites(profileId: number) {
    this.profileApi.viewProfileFavoritesByProfileId(profileId).subscribe(response => {
      response.$values.forEach((element: any) => {
        this.getDogById(element.dogId)
      })
  })
}

  getDogById(dogId: number) {
    this.dogSearchService.viewDog(dogId).then(doggo => {
      this.favorites.push(doggo.data.animal)
    })
  }
}
