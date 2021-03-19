import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topic } from 'src/app/models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http:HttpClient) { }

  async getAllTopics(){
    const topics:Topic[] = await this.http.get<Topic[]>(`http://34.122.220.146:8080/topics`).toPromise();
    return topics;
  }

  async getTopicById(topicId:number){
    const topic:Topic = await this.http.get<Topic>(`http://34.122.220.146:8080/topics/${topicId}`).toPromise();
    return topic;
  }

  async getTopicByName(topicName:string){
    const topic:Topic = await this.http.get<Topic>(`http://34.122.220.146:8080/topics?topicName=${topicName}`).toPromise();
    return topic;
  }

  async createTopic(topic:Topic){
    topic = await this.http.post<Topic>(`http://34.122.220.146:8080/topics`, topic).toPromise();
    return topic;
  }

  async updateTopic(topic:Topic){
    topic = await this.http.put<Topic>(`http://34.122.220.146:8080/topics/${topic.topicId}`, topic).toPromise();
    return topic;
  }

  async removeTopic(topicId:number){
    const result = await this.http.delete(`http://34.122.220.146:8080/topics/${topicId}`);
    return result;
  }

}
