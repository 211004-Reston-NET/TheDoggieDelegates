import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  });
  constructor() { }

  ngOnInit(): void {
  }

}
