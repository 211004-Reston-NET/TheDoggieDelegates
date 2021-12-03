import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { Client } from '@petfinder/petfinder-js';
import { Organization } from '../dog-view/dog-view-model';
import { DogSearchService } from '../services/dog-search.service';
import { ShelterRoot } from './shelter';

const client = new Client({ apiKey: "JfKma1OQsJw2IJLGLGSCOBh7thEcY0et3ajRAWxthCL2qWqCqd", secret: "tOkMyd3qr3Ui7V4c2HWMBZN6cDQPtLaD7prWHKSM" })


@Component({
  selector: 'app-shelter-search',
  templateUrl: './shelter-search.component.html',
  styleUrls: ['./shelter-search.component.css']
})
export class ShelterSearchComponent implements OnInit {

  searchResults: any = []
  show: boolean = false;

  constructor(private dogSearchService: DogSearchService, readonly geolocation$: GeolocationService, private router: Router) { }

  onClickSubmit(data: any) {
    if (this.show) {
      this.searchResults = []
    }

    this.dogSearchService.shelterSearch(data.zipCode).then(
      resp => {
        resp.data.organizations.forEach((element: any) => {
          this.searchResults.push(element)
        });
      })

    this.show = true
  }

ngOnInit(): void {
}
}
