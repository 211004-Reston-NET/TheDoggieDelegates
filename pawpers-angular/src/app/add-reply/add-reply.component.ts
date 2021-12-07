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

  topicID: any =  0;
  profileID: any = 4; // This is wrong it needs to route to the correct profile
  displayMessage:string = "";

  constructor(private replyService:TopicsAPIService, private router:Router, private route:ActivatedRoute) {
    //I need to write a function to change profileID to the correct value
    this.topicID = Number(this.route.snapshot.paramMap.get("id"))
   }

  replyGroup:FormGroup = new FormGroup ({
    replyMessage: new FormControl("", Validators.required),
    topicId:      new FormControl(""),
    profileId:    new FormControl(""),
  });

  //gets for Form Validation
  get message() {return this.replyGroup.get("replyMessage");}

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
            window.location.reload();
           
        }
      )

    }
    else
    {
      this.displayMessage = "Reply must not be empty!";
    }

  }

}
