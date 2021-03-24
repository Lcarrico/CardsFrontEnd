import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StackLink } from '../../models/stackLink';

@Injectable({
  providedIn: 'root'
})
export class StackLinkService {

  constructor(private http:HttpClient) {}

  async getAllStackLinks(){
    const stackLinks:StackLink[] = await this.http.get<StackLink[]>(`http://34.122.220.146:8080/stackLinks`).toPromise();
    return stackLinks;
  }

  async getStackLinkById(stackId:number){
    const stackLink:StackLink = await this.http.get<StackLink>(`http://34.122.220.146:8080/stackLinks/${stackId}`).toPromise();
    return stackLink;
  }

  async getStackLinksByLearnerId(learnerId:number){
    const stackLinks:StackLink[] = await this.http.get<StackLink[]>(`http://34.122.220.146:8080/stackLinks?learnerId=${learnerId}`).toPromise();
    return stackLinks;
  }

  async createStackLink(stackLink:StackLink){
    stackLink = await this.http.post<StackLink>(`http://34.122.220.146:8080/stackLinks`, stackLink).toPromise();
    return stackLink;
  }

  async updateStackLink(stackLink:StackLink){
    stackLink = await this.http.put<StackLink>(`http://34.122.220.146:8080/stackLinks`, stackLink).toPromise();
    return stackLink;
  }

  async removeStackLink(stackLinkId:number){
    const result = await this.http.delete(`http:///34.122.220.146:8080/stackLinks/${stackLinkId}`).toPromise();
    return result;
  }
}
