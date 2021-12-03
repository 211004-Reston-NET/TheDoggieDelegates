import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../AngularModels/Category';
import { Profile } from '../AngularModels/profile';
import { Main, Reply } from '../AngularModels/reply';
import { Topic } from '../AngularModels/topic';
import { TopicsAPIService } from '../services/topics-api.service';

@Component({
  selector: 'app-reply-page',
  templateUrl: './reply-page.component.html',
  styleUrls: ['./reply-page.component.css']
})
export class ReplyPageComponent implements OnInit {

  topic: any = {}

  constructor(private topicApi: TopicsAPIService, private router: Router, private route: ActivatedRoute) {
    let topicId = Number(this.route.snapshot.paramMap.get("id"))
    this.getTopicWithReplies(topicId)
  }
  ngOnInit(): void {
  }

  getTopicWithReplies(topicId: number) {
    this.topicApi.getTopicById(topicId).subscribe(response => {
      this.topic = response

      this.topicApi.getProfileById(this.topic.profileId).subscribe(response => {
        this.topic.profile = response
      })

      this.topic.replies.$values.forEach((element: { profileId: number; profile: any; }) => {
        this.topicApi.getProfileById(element.profileId).subscribe(response => {
          element.profile = response
        })
      });
    })
  }

  redirectToAddReply()
  {
    this.router.navigateByUrl('add-reply');
  }
  
}