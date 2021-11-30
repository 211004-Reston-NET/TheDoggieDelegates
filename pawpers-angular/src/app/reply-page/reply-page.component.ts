import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reply-page',
  templateUrl: './reply-page.component.html',
  styleUrls: ['./reply-page.component.css']
})
export class ReplyPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
