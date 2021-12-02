import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { Client } from '@petfinder/petfinder-js';
import { DogSearchService } from '../services/dog-search.service';

const client = new Client({apiKey: "JfKma1OQsJw2IJLGLGSCOBh7thEcY0et3ajRAWxthCL2qWqCqd", secret: "tOkMyd3qr3Ui7V4c2HWMBZN6cDQPtLaD7prWHKSM"})


@Component({
  selector: 'app-shelter-search',
  templateUrl: './shelter-search.component.html',
  styleUrls: ['./shelter-search.component.css']
})
export class ShelterSearchComponent implements OnInit {

  constructor(private dogSearchService: DogSearchService, readonly geolocation$: GeolocationService, private router:Router) { }

  shelterSearch(zipCode: number) {
    return client.organization.search({
      limit: 100,
      location: zipCode,
      distance: 100,
      sort: "distance"
    })
  }

  ngOnInit(): void {
  }

}
