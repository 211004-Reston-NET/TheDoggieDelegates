import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
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

  listOfTopic:Topic[] = [];

  show:boolean | null = true;


  constructor(private topicApi:TopicsAPIService, private router:Router, public auth0:AuthService) { 
    
    this.topicApi.getAllTopic().subscribe((response) => {
        this.mainObject = response;
        this.listOfTopic = this.mainObject.$values;
      
        this.listOfTopic.forEach((ele) => ele.show = false);
    });

  }
  
  ngOnInit(): void {
    
  }

  showReplies(p_id:number | undefined)
  {
    let index:number = this.listOfTopic.findIndex(top => top.topicId==p_id);
    
    this.listOfTopic[index].show = !this.listOfTopic[index].show;
  }
  
  addTopic()
  {
    this.router.navigateByUrl('addtopic');
  }

}
