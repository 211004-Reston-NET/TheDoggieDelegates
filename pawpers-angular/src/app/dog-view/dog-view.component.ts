import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DogSearchService } from '../services/dog-search.service';
import { Animal, dogViewRoot } from './dog-view-model';

@Component({
  selector: 'app-dog-view',
  templateUrl: './dog-view.component.html',
  styleUrls: ['./dog-view.component.css']
})
export class DogViewComponent implements OnInit {
  searchResult: dogViewRoot = {} as dogViewRoot

  constructor(private dogSearchService: DogSearchService, private router:Router) { 
    this.dogSearchService.viewDog(53749744).then(
      resp => {
        this.searchResult.animal = resp.data.animal
      }
    )
  }

  ngOnInit(): void {
  }

}
