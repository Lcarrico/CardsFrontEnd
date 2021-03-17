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

  async getCardsByTag(tag:Tag){
    const cards:Card[] = await this.http.get<Card[]>(`http://34.122.220.146:8080/tags/${tag.name}/cards`).toPromise();
    return cards;
  }

  async getStacksByTag(tag:Tag){
    const stacks:Stack[] = await this.http.get<Stack[]>(`http://34.122.220.146:8080/tags/${tag.name}/stacks`).toPromise();
    return stacks;
  }

  async getTagById(id:number){
    const tags:Tag[] = await this.http.get<Tag[]>(`http://34.122.220.146:8080/tags/${id}`).toPromise();
    return tags;
  }

  async getTagByName(tagName:string){
    const tags:Tag[] = await this.http.get<Tag[]>(`http://34.122.220.146:8080/tags?tagName=${tagName}`).toPromise();
    return tags;
  }

  async updateTag(tag:Tag){
    tag = await this.http.put<Tag>(`http://34.122.220.146:8080/tags`,tag).toPromise();
    return tag;
  }

  async deleteTag(tag:Tag){
    return await this.http.delete(`http://34.122.220.146:8080/tags/${tag.tagId}`).toPromise();
  }
}
