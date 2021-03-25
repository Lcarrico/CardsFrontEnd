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


  async getAllTopicLinks(){
    const topicLinks:TopicLink[] = await this.http.get<TopicLink[]>(`http://34.122.220.146:8080/topicLinks`).toPromise();
    return topicLinks;
  }

  async getTopicLinkById(topicId:number){
    const topicLink:TopicLink = await this.http.get<TopicLink>(`http://34.122.220.146:8080/topicLinks/${topicId}`).toPromise();
    return topicLink;
  }

  async getTopicLinkByStackId(stackId:number){
    const topicLink:TopicLink = await this.http.get<TopicLink>(`http://34.122.220.146:8080/topicLinks?stackId=${stackId}`).toPromise();
    return topicLink;
  }

  async getTopicLinkByTopicId(topicId:number){
    const topicLink:TopicLink = await this.http.get<TopicLink>(`http://34.122.220.146:8080/topicLinks?topicId=${topicId}`).toPromise();
    return topicLink;
  }

  async createTopicLink(topicLink:TopicLink){
    topicLink = await this.http.post<TopicLink>(`http://34.122.220.146:8080/topicLinks`, topicLink).toPromise();
    return topicLink;
  }

  async updateTopicLink(topicLink:TopicLink){
    topicLink = await this.http.put<TopicLink>(`http://34.122.220.146:8080/topicLinks`, topicLink).toPromise();
    return topicLink;
  }

  async removeTopicLink(topicLinkId:number){
    const result = await this.http.delete(`http:///34.122.220.146:8080/topicLinks/${topicLinkId}`).toPromise();
    return result;
  }
}
