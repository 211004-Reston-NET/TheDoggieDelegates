import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private dogSearchService: DogSearchService, private router:Router) {
    this.dogSearchService.dogSearch(87123).then(
      resp => {
        resp.data.animals.forEach((animal: Animal) => {
          this.searchResults.animals.push(animal)
        });
      }
    )
  }

  ngOnInit(): void {
  }
}


