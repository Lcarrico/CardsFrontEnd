import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TagLink } from 'src/app/models/tagLink';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class TagLinkService {

  jwt:string = this.jwtService.getJwtFromCookie()

  constructor(
    private http:HttpClient,
    private jwtService:JwtService
    ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.jwt })
  };

  // async getAllTagLinks(){
  //   const tagLinks:TagLink[] = await this.http.get<TagLink[]>(`http://34.122.220.146:8080/tagLinks`,this.httpOptions).toPromise();
  //   return tagLinks;
  // }

  // async getTagLinkById(tagId:number){
  //   const tagLink:TagLink = await this.http.get<TagLink>(`http://34.122.220.146:8080/tagLinks/${tagId}`,this.httpOptions).toPromise();
  //   return tagLink;
  // }

  // async getTagLinksByCardId(cardId:number){
  //   const tagLink:TagLink[] = await this.http.get<TagLink[]>(`http://34.122.220.146:8080/tagLinks?cardId=${cardId}`,this.httpOptions).toPromise();
  //   return tagLink;
  // }

  // async getTagLinkByTagId(tagId:number){
  //   const tagLink:TagLink = await this.http.get<TagLink>(`http://34.122.220.146:8080/tagLinks?tagId=${tagId}`,this.httpOptions).toPromise();
  //   return tagLink;
  // }

  // async createTagLink(tagLink:TagLink){
  //   tagLink = await this.http.post<TagLink>(`http://34.122.220.146:8080/tagLinks`, tagLink, this.httpOptions).toPromise();
  //   return tagLink;
  // }

  // async updateTagLink(tagLink:TagLink){
  //   tagLink = await this.http.put<TagLink>(`http://34.122.220.146:8080/tagLinks`, tagLink, this.httpOptions).toPromise();
  //   return tagLink;
  // }

  // async removeTagLink(tagLinkId:number){
  //   const result = await this.http.delete(`http:///34.122.220.146:8080/tagLinks/${tagLinkId}`, this.httpOptions).toPromise();
  //   return result;
  // }

  async getAllTagLinks(){
    const tagLinks:TagLink[] = await this.http.get<TagLink[]>(`https://34.122.220.146:8080/tagLinks`,this.httpOptions).toPromise();
    return tagLinks;
  }

  async getTagLinkById(tagId:number){
    const tagLink:TagLink = await this.http.get<TagLink>(`https://34.122.220.146:8080/tagLinks/${tagId}`,this.httpOptions).toPromise();
    return tagLink;
  }

  async getTagLinksByCardId(cardId:number){
    const tagLink:TagLink[] = await this.http.get<TagLink[]>(`https://34.122.220.146:8080/tagLinks?cardId=${cardId}`,this.httpOptions).toPromise();
    return tagLink;
  }

  async getTagLinkByTagId(tagId:number){
    const tagLink:TagLink = await this.http.get<TagLink>(`https://34.122.220.146:8080/tagLinks?tagId=${tagId}`,this.httpOptions).toPromise();
    return tagLink;
  }

  async createTagLink(tagLink:TagLink){
    tagLink = await this.http.post<TagLink>(`https://34.122.220.146:8080/tagLinks`, tagLink, this.httpOptions).toPromise();
    return tagLink;
  }

  async updateTagLink(tagLink:TagLink){
    tagLink = await this.http.put<TagLink>(`https://34.122.220.146:8080/tagLinks`, tagLink, this.httpOptions).toPromise();
    return tagLink;
  }

  async removeTagLink(tagLinkId:number){
    const result = await this.http.delete(`https:///34.122.220.146:8080/tagLinks/${tagLinkId}`, this.httpOptions).toPromise();
    return result;
  }


}
