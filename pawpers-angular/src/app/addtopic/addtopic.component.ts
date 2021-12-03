import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {


  topicGroup: FormGroup = new FormGroup({ 
    topicName: new FormControl(""),
    topicBody: new FormControl(""),
    profileId: new FormControl(""),
    categoryId: new FormControl(""),
    postTimestamp: new FormControl("")

  });
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  addTopic(topicGroup:FormGroup)
  {
    let topic:any = {
        topicName:  this.topicGroup.get("topicName")?.value,
        topicBody:  this.topicGroup.get("topicBody")?.value,
        profileId:  this.topicGroup.get("profileId")?.value,
        categoryId:  this.topicGroup.get("categoryId")?.value,
        postTimestamp: this.topicGroup.get("postTimestamp")?.value

    }
  }

}
