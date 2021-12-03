import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicsAPIService } from '../services/topics-api.service';
import { Reply, Main } from '../AngularModels/reply';
import { Topic } from '../AngularModels/topic';

@Component({
  selector: 'app-reply-page',
  templateUrl: './reply-page.component.html',
  styleUrls: ['./reply-page.component.css']
})
export class ReplyPageComponent implements OnInit {

  topic: Topic = {} as Topic
  constructor(private topicApi: TopicsAPIService, private router: Router, private route: ActivatedRoute) {
    let topicId = Number(this.route.snapshot.paramMap.get("id"))
    this.getTopicWithReplies(topicId)
  }

  getTopicWithReplies(topicId: number) {
    this.topicApi.getAllRepliesByTopicId(topicId).subscribe(response => {
      this.topic = response
    })
  }

  ngOnInit(): void {
  }
}
