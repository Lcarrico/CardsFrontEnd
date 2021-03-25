import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from 'src/app/models/card';
import { Stack } from 'src/app/models/stack';
import { Tag } from 'src/app/models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http:HttpClient) { }

  async createTag(tag:Tag){
    tag = await this.http.post<Tag>(`http://34.122.220.146:8080/tags`,tag).toPromise();
    return tag;
  }

  async getTagById(id:number){
    const tags:Tag = await this.http.get<Tag>(`http://34.122.220.146:8080/tags/${id}`).toPromise();
    return tags;
  }

  async getTagByName(tagName:string){
    const tag:Tag = await this.http.get<Tag>(`http://34.122.220.146:8080/tags?tagName=${tagName}`).toPromise();
    return tag;
  }

  async updateTag(tag:Tag){
    tag = await this.http.put<Tag>(`http://34.122.220.146:8080/tags`,tag).toPromise();
    return tag;
  }

  async removeTag(tag:Tag){
    return await this.http.delete(`http://34.122.220.146:8080/tags/${tag.tagId}`).toPromise();
  }

  async getAllTags(){
    const tags:Tag[] = await this.http.get<Tag[]>(`http://34.122.220.146:8080/tags`).toPromise();
    return tags;
  }
}
