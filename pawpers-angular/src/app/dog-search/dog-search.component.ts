import { LowerCasePipe, PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { take } from 'rxjs';
import { DogSearchService } from '../services/dog-search.service';
import { Animal, dogSearchRoot, Photo } from './dog-search-model';


@Component({
  selector: 'app-dog-search',
  templateUrl: './dog-search.component.html',
  styleUrls: ['./dog-search.component.css']
})
export class DogSearchComponent implements OnInit {
  searchResults: dogSearchRoot = {
    animals: [],
  };

  geoLocation = {
    latitude: 0,
    longitude: 0
  }

  show: boolean = false;
  dogShow: boolean = false;

  constructor(private dogSearchService: DogSearchService, readonly geolocation$: GeolocationService, private router:Router) {
    // geolocation$.pipe(take(1)).subscribe(
    //   resp => {
    //     this.geoLocation.latitude = resp.coords.latitude
    //     this.geoLocation.longitude = resp.coords.longitude
    //   }
    // );

    this.show = true
    this.dogSearchService.randomDogs().then(
      resp => {
        resp.data.animals.forEach((animal: Animal) => {
          if (animal.photos[0] != null  && animal.status == "adoptable") {
            this.searchResults.animals.push(animal)
          }
        });
      }
    )
  }

  breedSearchOnClick(data: any) {
    if (this.show) {
      this.searchResults = {
        animals: []
      }
    }
    this.dogSearchService.randomDogs().then(
      resp => {
        resp.data.animals.forEach((animal: Animal) => {
          if (animal.photos[0] != null  && animal.status == "adoptable"  && animal.breeds.primary.toLowerCase().includes(data.breedSearch.toLowerCase())) {
            this.searchResults.animals.push(animal)
          }
        });
      }
    )

    this.show = true
  }

  onClickSubmit(data: any) {
    if (this.show) {
      this.searchResults = {
        animals: []
      }
    }

    this.dogSearchService.dogSearch(data.zipCode).then(
      resp => {
        resp.data.animals.forEach((animal: Animal) => {
          if (animal.photos[0] != null  && animal.status == "adoptable") {
            this.searchResults.animals.push(animal)
          }
        });
      }
    )

    this.show = true
  }

  showDogInfo(dogId: number) {
    let index: number = this.searchResults.animals.findIndex(
      animal => animal.id==dogId
    )
  }

  ngOnInit(): void {
  }
}


