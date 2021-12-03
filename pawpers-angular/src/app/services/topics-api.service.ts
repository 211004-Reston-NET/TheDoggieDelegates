import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../AngularModels/topic';


@Injectable({
  providedIn: 'root'
})
export class TopicsAPIService {

  private endpoint:string = "https://pawpers.azurewebsites.net";
  
  constructor(private http:HttpClient) { }

  //This should list out all the Topics
  getAllTopic()
  {
    //httpclient get() method will do a get request
    return this.http.get<Topic>(this.endpoint + "/Topic/GetAllWithNav");
  }

  addTopic(topic:Topic)
  {
    return this.http.post(this.endpoint + "/Topic/Create", topic);
  }


  getAllRepliesByTopicId(TopicId: number)
  {
      return this.http.get<any>(this.endpoint + "/Topic/GetWithNav/" + TopicId);
  }
}
