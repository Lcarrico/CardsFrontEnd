import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Card } from 'src/app/models/card';
import { Stack } from 'src/app/models/stack';
import { Tag } from 'src/app/models/tag';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  jwt:string = this.jwtService.getJwtFromCookie()

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.jwt })
  };

  constructor(
    private http:HttpClient,
    private jwtService:JwtService
    ) { }
    

  async createTag(tag:Tag):Promise<Tag>{
    tag = await this.http.post<Tag>(`https://34.122.220.146:8080/tags`,tag,this.httpOptions).toPromise();
    return tag;
  }

  async getTagById(id:number){
    const tags:Tag = await this.http.get<Tag>(`https://34.122.220.146:8080/tags/${id}`,this.httpOptions).toPromise();
    return tags;
  }

  async getTagByName(tagName:string){
    const tags:Tag[] = await this.http.get<Tag[]>(`https://34.122.220.146:8080/tags?tagName=${tagName}`,this.httpOptions).toPromise();
    return tags[0];
  }

  async updateTag(tag:Tag){
    tag = await this.http.put<Tag>(`https://34.122.220.146:8080/tags`,tag,this.httpOptions).toPromise();
    return tag;
  }

  async removeTag(tag:Tag){
    return await this.http.delete(`https://34.122.220.146:8080/tags/${tag.tagId}`,this.httpOptions).toPromise();
  }

  async getAllTags(){
    const tags:Tag[] = await this.http.get<Tag[]>(`https://34.122.220.146:8080/tags`,this.httpOptions).toPromise();
    return tags;
  }
}
