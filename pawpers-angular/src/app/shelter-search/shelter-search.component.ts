import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { Client } from '@petfinder/petfinder-js';
import { DogSearchService } from '../services/dog-search.service';

const client = new Client({ apiKey: "JfKma1OQsJw2IJLGLGSCOBh7thEcY0et3ajRAWxthCL2qWqCqd", secret: "tOkMyd3qr3Ui7V4c2HWMBZN6cDQPtLaD7prWHKSM" })


@Component({
  selector: 'app-shelter-search',
  templateUrl: './shelter-search.component.html',
  styleUrls: ['./shelter-search.component.css']
})
export class ShelterSearchComponent implements OnInit {

  searchResults: any = []
  show: boolean = false;
  displayMessage1:string = ""; 
  displayMessage:string = "";

  constructor(private dogSearchService: DogSearchService, readonly geolocation$: GeolocationService, private router: Router) { }

  onClickSubmit(data: any) {
  
    if (this.show) {
      this.searchResults = []
    }

    if (data.zipCode != "") {
      this.dogSearchService.shelterSearch(data.zipCode).then(
        resp => {
          resp.data.organizations.forEach((element: any) => {
            this.searchResults.push(element)
          });
        })
        console.log(data.zipCode)
    }
    else
    {
      this.displayMessage = "Please enter a zip code!";
    }
    

    this.show = true
  }

ngOnInit(): void {
}
}
