import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TopicsAPIService {

  private endpoint:string = "https://pawpers.azurewebsites.net";
  
  constructor(private http:HttpClient) { }

  //This should list out all the Topics
  getAllTopics()
  {
    //httpclient get() method will do a get request
    return this.http.get<any>(this.endpoint + "/Topic/GetAllWithNav");
  }

  getTopicById(topicId: number)
  {
      return this.http.get<any>(this.endpoint + "/Topic/GetWithNav/" + topicId);
  }

  getRepliesByTopicId(topicId: number)
  {
    return this.http.get<any>(this.endpoint + "/Reply/SearchByTopic/" + topicId)
  }

  // addTopic(topic:Topic)
  // {
  //   return this.http.post(this.endpoint + "/Topic/Create", topic);
  // }
}
