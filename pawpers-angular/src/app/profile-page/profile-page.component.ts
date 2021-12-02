import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile, Main } from '../AngularModels/profile';
import { ProfileApiService } from '../services/profile-api.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  mainObject:Main = {
    $id:"",
    $values: []
  };
  listOfProfile:any[] = [];

  constructor(private profileApi:ProfileApiService ,private router:Router) { 
    
  }

  ngOnInit(): void {
  }

  redirectToAddProfile()
  {
    this.router.navigateByUrl('add-profile');
  }

}
