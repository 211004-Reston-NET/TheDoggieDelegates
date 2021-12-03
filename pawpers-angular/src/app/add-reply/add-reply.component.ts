import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reply } from '../AngularModels/reply';
import { TopicsAPIService } from '../services/topics-api.service';

@Component({
  selector: 'app-add-reply',
  templateUrl: './add-reply.component.html',
  styleUrls: ['./add-reply.component.css']
})
export class AddReplyComponent implements OnInit {

  topicID: any =  6;
  profileID: any = 4;

  constructor(private replyService:TopicsAPIService, private router:Router, private route:ActivatedRoute) {
    //I need to writ a function to change profileID to the correct value
    //this.topicID = Number(this.route.snapshot.paramMap.get("id"))
   }

  replyGroup:FormGroup = new FormGroup ({
    replyMessage: new FormControl("", Validators.required),
    topicId:      new FormControl(""),
    profileId:    new FormControl(""),
  });

  ngOnInit(): void {
  }

  createReply(replyGroup: FormGroup)
  {
    if (this.replyGroup.valid) {

      let reply:Reply = {
        replyMessage: this.replyGroup.get("replyMessage")?.value,
        topicId:      this.topicID,
        profileId:    this.profileID,
      }

      this.replyService.createReply(reply).subscribe(
        (response) => {
          this.router.navigateByUrl('/topic-page')
        }
      )

    };

  }

}
