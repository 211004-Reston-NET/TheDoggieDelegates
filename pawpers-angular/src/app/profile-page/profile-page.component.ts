import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Main } from '../AngularModels/profile';
import { AuthService } from '@auth0/auth0-angular';
import { ProfileApiService } from '../services/profile-api.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  profile:any = {};
  //listOfProfile:any[] = [];
  //listOfFavorite:any[] =[];

  constructor(private profileApi:ProfileApiService ,private router:Router, public auth0:AuthService) {     
  }

  ngOnInit(): void {
  }

  redirectToAddProfile()
  {
    this.router.navigateByUrl('add-profile');
  }

}
