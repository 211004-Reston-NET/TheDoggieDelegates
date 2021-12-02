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
  topicId: number = 0;

  @Input()
  show: boolean = true;

  listOfReplies: Reply[] = [];
  constructor(private topicApi: TopicsAPIService, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.topicApi.getAllRepliesByTopicId(this.topicId).subscribe((response) => {
      this.listOfReplies = response.replies.$values
    });
  }

  ngOnInit(): void {
  }
}
