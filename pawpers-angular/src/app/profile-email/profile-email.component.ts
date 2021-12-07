import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-email',
  templateUrl: './profile-email.component.html',
  styleUrls: ['./profile-email.component.css']
})
export class ProfileEmailComponent implements OnInit {

  @Input() profile: any
  @Input() hasYard: any
  @Input() hasChildren: any
  @Input() dwellingType: any
  @Input() familyAllergies: any

  msg: any

  constructor() {}

  ngOnInit(): void {
    this.msg = `
      <div class="card card-responsive printDiv">
    <dt>Name</dt>
    <dd>${this.profile.profileName}</dd>
    <dt>Address</dt>
    <dd>${this.profile.profileStreetaddress}<br /> {{profile.profileCity}}, {{state}} {{profile.profileZipcode}}
    </dd>
    <dt>Age</dt>
    <dd>${this.profile.profileAge}</dd>
    <dt>Home Phone</dt>
    <dd>${this.profile.profileHomephone}</dd>
    <dt>Personal Phone</dt>
    <dd>${this.profile.profilePersonalphone}</dd>
    <dt>Email</dt>
    <dd>${this.profile.profileEmail}</dd>
    <dt>Occupation</dt>
    <dd>${this.profile.profileOccupation}</dd>
    <dt>Spouse</dt>
    <dd>${this.profile.profileSpousename}</dd>
    <dt>Children</dt>
    <dd>${this.hasChildren}</dd>
    <dt>Dwelling Type</dt>
    <dd>${this.dwellingType}</dd>
    <dt>Yard</dt>
    <dd>${this.hasYard}</dd>
    <dt>Landlord Name</dt>
    <dd>${this.profile.profileLandlordname}</dd>
    <dt>Landlord Phone</dt>
    <dd>${this.profile.profileLandlordphone}</dd>
    <dt>Other Pet Name</dt>
    <dd>${this.profile.profileOtherpetname}</dd>
    <dt>Other pet breed</dt>
    <dd>${this.profile.profileOtherpetbreed}</dd>
    <dt>Other Pet Gender</dt>
    <dd>${this.profile.profileOtherpetsex}</dd>
    <dt>Known Family Animal Allergies</dt>
    <dd>${this.familyAllergies}</dd>
    <dt>Primary Caregiver</dt>
    <dd>${this.profile.profileResponsiblefordog}</dd>
    <dt>Adoption Reason</dt>
    <dd>${this.profile.profileAdoptionreason}</dd>
    <dt>Where Will The Dog Sleep</dt>
    <dd>${this.profile.profileDogsleepat}</dd>
    <dt>What will you do if the dog is aggressive towards humans or other animals</dt>
    <dd>${this.profile.profileDogaggresive}</dd>
    <dt>What will you do if the dog gets sick and needs medication?</dt>
    <dd>${this.profile.profileMedfordog}</dd>
    <dt>What will you do if you are unable to care for the dog?</dt>
    <dd>${this.profile.profileNocaredog}</dd>
</div>
      `
  }
}
