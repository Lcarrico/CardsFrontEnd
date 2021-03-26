import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TopicLink } from 'src/app/models/topicLink';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class TopicLinkService {

  jwt:string = this.jwtService.getJwtFromCookie()

  constructor(
    private http:HttpClient,
    private jwtService:JwtService
    ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.jwt })
  };

  async getAllTopicLinks(){
    const topicLinks:TopicLink[] = await this.http.get<TopicLink[]>(`http://34.122.220.146:8080/topicLinks`,this.httpOptions).toPromise();
    return topicLinks;
  }

  async getTopicLinkById(topicId:number){
    const topicLink:TopicLink = await this.http.get<TopicLink>(`http://34.122.220.146:8080/topicLinks/${topicId}`,this.httpOptions).toPromise();
    return topicLink;
  }

  async getTopicLinkByStackId(stackId:number){
    const topicLink:TopicLink = await this.http.get<TopicLink>(`http://34.122.220.146:8080/topicLinks?stackId=${stackId}`,this.httpOptions).toPromise();
    return topicLink;
  }

  async getTopicLinkByTopicId(topicId:number){
    const topicLink:TopicLink = await this.http.get<TopicLink>(`http://34.122.220.146:8080/topicLinks?topicId=${topicId}`,this.httpOptions).toPromise();
    return topicLink;
  }

  async createTopicLink(topicLink:TopicLink){
    topicLink = await this.http.post<TopicLink>(`http://34.122.220.146:8080/topicLinks`, topicLink, this.httpOptions).toPromise();
    return topicLink;
  }

  async updateTopicLink(topicLink:TopicLink){
    topicLink = await this.http.put<TopicLink>(`http://34.122.220.146:8080/topicLinks`, topicLink, this.httpOptions).toPromise();
    return topicLink;
  }

  async removeTopicLink(topicLinkId:number){
    const result = await this.http.delete(`http:///34.122.220.146:8080/topicLinks/${topicLinkId}`, this.httpOptions).toPromise();
    return result;
  }
}
