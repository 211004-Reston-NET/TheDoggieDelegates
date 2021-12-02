import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TopicsAPIService } from '../services/topics-api.service';
import { Reply, Main } from '../AngularModels/reply';

@Component({
  selector: 'app-reply-page',
  templateUrl: './reply-page.component.html',
  styleUrls: ['./reply-page.component.css']
})
export class ReplyPageComponent implements OnInit, OnChanges {

    @Input()
    topicId:number | undefined = 0;

    @Input()
    show:boolean | undefined = true;

    mainObject:Main = {
      $id:"",
      $values: []

    };
    listOfReplies:Reply[] = [];
  constructor(private topicApi:TopicsAPIService, private router:Router) {


    //this.topicApi.getAllRepliesByTopicId(this.mainObject.$values).subscribe((response) => {
    //        this.listOfReplies = this.mainObject.$values;
    //        this.mainObject = response;
    
    //});

   }

  ngOnChanges(changes: SimpleChanges): void {
    this.topicApi.getAllRepliesByTopicId(this.topicId).subscribe((response) => {
              this.listOfReplies = response.profile.replies.$values;
              

      });
  }
  
   ngOnInit(): void {
  }

}
