import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Main } from '../AngularModels/reply';
import { Topic } from '../AngularModels/topic';
import { TopicsAPIService } from '../services/topics-api.service';

@Component({
  selector: 'app-reply-page',
  templateUrl: './reply-page.component.html',
  styleUrls: ['./reply-page.component.css']
})
export class ReplyPageComponent implements OnInit {

  topic: Topic = {} as Topic
  replies: Main = {
    $id: "",
    $values: []
  }

  constructor(private topicApi: TopicsAPIService, private router: Router, private route: ActivatedRoute) {
    let topicId = Number(this.route.snapshot.paramMap.get("id"))
    this.getTopicWithReplies(topicId)
    this.getRepliesByTopicId(topicId)
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getTopicWithReplies(topicId: number) {
    this.topicApi.getTopicById(topicId).subscribe(response => {
      this.topic = response
    })
  }

  getRepliesByTopicId(topicId:number) {
    this.topicApi.getRepliesByTopicId(topicId).subscribe(response => {
      this.replies = response
    })
  }
}

