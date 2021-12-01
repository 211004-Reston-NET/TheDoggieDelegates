import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topic, Main } from '../AngularModels/topic';
import { TopicsAPIService } from '../services/topics-api.service';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {
  
  mainObject:Main = {
    $id:"",
    $values: []
  };
  listOfTopic:any[] = [];
  
  constructor(private topicApi:TopicsAPIService, private router:Router) { 
    
    this.topicApi.getAllTopic().subscribe((response) => {
      this.mainObject = response;
      this.listOfTopic = this.mainObject.$values;
      console.log(this.mainObject.$values[0]);
      console.log(this.listOfTopic);
    });
  }
  
  ngOnInit(): void {
    
  }
  
}
