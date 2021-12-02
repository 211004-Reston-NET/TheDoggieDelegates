import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic, Main } from '../AngularModels/topic';


@Injectable({
  providedIn: 'root'
})
export class TopicsAPIService {

  private endpoint:string = "https://pawpers.azurewebsites.net";
  
  constructor(private http:HttpClient) { }

  //This should list out all the Topics
  getAllTopic() :Observable<Main>
  {
    //httpclient get() method will do a get request
    return this.http.get<Main>(this.endpoint + "/Topic/GetAll");
  }


}
