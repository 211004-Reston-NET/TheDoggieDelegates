import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Main } from '../AngularModels/topic';
import { TopicsAPIService } from '../services/topics-api.service';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {
  
  topics: Main = {
    $id: "",
    $values: []
  }

  constructor(private topicApi:TopicsAPIService, private router:Router, public auth0:AuthService) { 
    this.topicApi.getAllTopics().subscribe(
      response => {
        this.topics = response
      }
    )
  }
  
  ngOnInit(): void {
    
  }
  
  addTopic()
  {
    this.router.navigateByUrl('addtopic');
  }

}
