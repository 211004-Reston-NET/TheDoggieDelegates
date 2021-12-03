import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Profile } from '../AngularModels/profile';
import { ProfileApiService } from '../services/profile-api.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  userEmail:any = "";
  
  constructor(private profileSerrvice:ProfileApiService, public auth:AuthService, private router:Router) {
    this.auth.user$.subscribe((result) => {
      this.userEmail = result?.email;
    })
   }

  profileGroup:FormGroup = new FormGroup({
    profileName:              new FormControl(""), //, Validators.required
    profileStreetaddress:     new FormControl(""),
    profileCity:              new FormControl(""),
    profileStateid:           new FormControl(""), // might need to review
    profileZipcode:           new FormControl(""),
    profileAge:               new FormControl(""),
    profileHomephone:         new FormControl(""),
    profilePersonalphone:     new FormControl(""),
    profileEmail:             new FormControl(""), 
    profileOccupation:        new FormControl(""),
    profileSpousename:        new FormControl(""),
    profileChildren:          new FormControl(""),
    profileDwellingid:        new FormControl(""), // might need to review
    profileHasyard:           new FormControl(""),
    profileLandlordname:      new FormControl(""),
    profileLandlordphone:     new FormControl(""),
    profileOtherpetname:      new FormControl(""),
    profileOtherpetbreed:     new FormControl(""),
    profileOtherpetsex:       new FormControl(""),
    profileOtherpetage:       new FormControl(""),
    profileFamilyallergies:   new FormControl(""),
    profileResponsiblefordog: new FormControl(""),
    profileAdoptionreason:    new FormControl(""),
    profileDogsleepat:        new FormControl(""),
    profileDogaggresive:      new FormControl(""),
    profileMedfordog:         new FormControl(""),
    profileNocaredog:         new FormControl(""),
  });

  ngOnInit(): void {
  }

  createProfile(profileGroup: FormGroup)
  {
    // if (this.profileGroup.valid) {
      
    //   };
    let profile:Profile = {
      profileName:              this.profileGroup.get("profileName")?.value,
      profileStreetaddress:     this.profileGroup.get("profileStreetaddress")?.value,
      profileCity:              this.profileGroup.get("profileCity")?.value,
      profileStateid:           this.profileGroup.get("profileStateid")?.value,
      profileZipcode:           this.profileGroup.get("profileZipcode")?.value,
      profileAge:               this.profileGroup.get("profileAge")?.value,
      profileHomephone:         this.profileGroup.get("profileHomephone")?.value,
      profilePersonalphone:     this.profileGroup.get("profilePersonalphone")?.value,
      profileEmail:             this.userEmail,
      profileOccupation:        this.profileGroup.get("profileOccupation")?.value,
      profileSpousename:        this.profileGroup.get("profileSpousename")?.value,
      profileChildren:          this.profileGroup.get("profileChildren")?.value,
      profileDwellingid:        this.profileGroup.get("profileDwellingid")?.value,
      profileHasyard:           this.profileGroup.get("profileHasyard")?.value,
      profileLandlordname:      this.profileGroup.get("profileLandlordname")?.value,
      profileLandlordphone:     this.profileGroup.get("profileLandlordphone")?.value,
      profileOtherpetname:      this.profileGroup.get("profileOtherpetname")?.value,
      profileOtherpetbreed:     this.profileGroup.get("profileOtherpetbreed")?.value,
      profileOtherpetsex:       this.profileGroup.get("profileOtherpetsex")?.value,
      profileOtherpetage:       this.profileGroup.get("profileOtherpetage")?.value,
      profileFamilyallergies:   this.profileGroup.get("profileFamilyallergies")?.value,
      profileResponsiblefordog: this.profileGroup.get("profileResponsiblefordog")?.value,
      profileAdoptionreason:    this.profileGroup.get("profileAdoptionreason")?.value,
      profileDogsleepat:        this.profileGroup.get("profileDogsleepat")?.value,
      profileDogaggresive:      this.profileGroup.get("profileDogaggresive")?.value,
      profileMedfordog:         this.profileGroup.get("profileMedfordog")?.value,
      profileNocaredog:         this.profileGroup.get("profileNocaredog")?.value,
    }

      this.profileSerrvice.createProfile(profile).subscribe(
        (response) => {
          this.router.navigateByUrl('/profile-page')
        }
      )
  }

}
