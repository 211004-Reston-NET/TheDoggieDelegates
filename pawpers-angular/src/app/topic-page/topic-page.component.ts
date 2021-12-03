import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Topic } from '../AngularModels/topic';
import { TopicsAPIService } from '../services/topics-api.service';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {
  
  topics: Topic[] = []

  show:boolean | null = true;


  constructor(private topicApi:TopicsAPIService, private router:Router, public auth0:AuthService) { 
    
    this.topicApi.getAllTopic().subscribe(
      response => {
        this.topics.push(response)
      })
  }
  
  ngOnInit(): void {
    
  }
  
  addTopic()
  {
    this.router.navigateByUrl('addtopic');
  }

}
