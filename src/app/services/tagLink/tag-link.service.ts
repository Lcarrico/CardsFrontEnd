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

  async getAllTagLinks(){
    const tagLinks:TagLink[] = await this.http.get<TagLink[]>(`http://34.122.220.146:8080/tagLinks`).toPromise();
    return tagLinks;
  }

  async getTagLinkById(tagId:number){
    const tagLink:TagLink = await this.http.get<TagLink>(`http://34.122.220.146:8080/tagLinks/${tagId}`).toPromise();
    return tagLink;
  }

  async getTagLinkByCardId(cardId:number){
    const tagLink:TagLink = await this.http.get<TagLink>(`http://34.122.220.146:8080/tagLinks?cardId=${cardId}`).toPromise();
    return tagLink;
  }

  async getTagLinkByTagId(tagId:number){
    const tagLink:TagLink = await this.http.get<TagLink>(`http://34.122.220.146:8080/tagLinks?tagId=${tagId}`).toPromise();
    return tagLink;
  }

  async createTagLink(tagLink:TagLink){
    tagLink = await this.http.post<TagLink>(`http://34.122.220.146:8080/tagLinks`, tagLink).toPromise();
    return tagLink;
  }

  async updateTagLink(tagLink:TagLink){
    tagLink = await this.http.put<TagLink>(`http://34.122.220.146:8080/tagLinks`, tagLink).toPromise();
    return tagLink;
  }

  async removeTagLink(tagLinkId:number){
    const result = await this.http.delete(`http:///34.122.220.146:8080/tagLinks/${tagLinkId}`).toPromise();
    return result;
  }
}
