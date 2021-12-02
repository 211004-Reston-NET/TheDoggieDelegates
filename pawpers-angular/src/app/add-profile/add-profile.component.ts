import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  
  constructor(private profileSerrvice:ProfileApiService, public auth:AuthService, private router:Router) { }

  profileGroup:FormGroup = new FormGroup({
    profileName:              new FormControl("", Validators.required),
    profileStreetaddress:     new FormControl("", Validators.required),
    profileCity:              new FormControl("", Validators.required),
    profileStateid:           new FormControl("", Validators.required), // might need to review
    profileZipcode:           new FormControl("", Validators.required),
    profileAge:               new FormControl("", Validators.required),
    profileHomephone:         new FormControl("", Validators.required),
    profilePersonalphone:     new FormControl("", Validators.required),
    profileEmail:             new FormControl("", Validators.required), 
    profileOccupation:        new FormControl("", Validators.required),
    profileSpousename:        new FormControl("", Validators.required),
    profileChildren:          new FormControl("", Validators.required),
    profileDwellingid:        new FormControl("", Validators.required), // might need to review
    profileHasyard:           new FormControl("", Validators.required),
    profileLandlordname:      new FormControl("", Validators.required),
    profileLandlordphone:     new FormControl("", Validators.required),
    profileOtherpetname:      new FormControl("", Validators.required),
    profileOtherpetbreed:     new FormControl("", Validators.required),
    profileOtherpetsex:       new FormControl("", Validators.required),
    profileOtherpetage:       new FormControl("", Validators.required),
    profileFamilyallergies:   new FormControl("", Validators.required),
    profileResponsiblefordog: new FormControl("", Validators.required),
    profileAdoptionreason:    new FormControl("", Validators.required),
    profileDogsleepat:        new FormControl("", Validators.required),
    profileDogaggresive:      new FormControl("", Validators.required),
    profileMedfordog:         new FormControl("", Validators.required),
    profileNocaredog:         new FormControl("", Validators.required),
  });

  ngOnInit(): void {
    // console.log(this.formEmail)
  }

  createProfile()
  {
    if (this.profileGroup.valid) {
      let profile:Profile = {
        profileName:              this.profileGroup.get("profileName")?.value,
        profileStreetaddress:     this.profileGroup.get("profileStreetaddress")?.value,
        profileCity:              this.profileGroup.get("profileCity")?.value,
        profileStateid:           this.profileGroup.get("profileStateid")?.value,
        profileZipcode:           this.profileGroup.get("profileZipcode")?.value,
        profileAge:               this.profileGroup.get("profileAge")?.value,
        profileHomephone:         this.profileGroup.get("profileHomephone")?.value,
        profilePersonalphone:     this.profileGroup.get("profilePersonalphone")?.value,
        profileEmail:             this.profileGroup.get("profileEmail")?.value,
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
      };

      this.profileSerrvice.createProfile(profile).subscribe(
        (response) => {
          this.router.navigateByUrl('/profile-page')
        }
      )
    }
  }

}
