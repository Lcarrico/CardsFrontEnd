import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Learner } from 'src/app/models/learner';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class LearnerService {

  jwt:string = this.jwtService.getJwtFromCookie()

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.jwt })
  };

  constructor(
    private http:HttpClient,
    private jwtService:JwtService
    ) { }
    
  async createLearner(learner:Learner):Promise<Learner> {
    learner = await this.http.post<Learner>(`http://34.122.220.146:8080/learners`,learner,this.httpOptions).toPromise();
    return learner;
  }

  async getLearnerById(id:number){
    const learners:Learner[] = await this.http.get<Learner[]>(`http://34.122.220.146:8080/learners/${id}`,this.httpOptions).toPromise();
    return learners;
  }

  async getLearnerByUsername(username:string){
    const learners:Learner[] = await this.http.get<Learner[]>(`http://34.122.220.146:8080/learners/${username}`,this.httpOptions).toPromise();
    return learners;
  }

  async getAllLearners(){
    const learners:Learner[] = await this.http.get<Learner[]>(`http://34.122.220.146:8080/learners`,this.httpOptions).toPromise();
    return learners;
  }

  async updateLearner(learner:Learner){
    learner = await this.http.put<Learner>(`http://34.122.220.146:8080/learners`,learner,this.httpOptions).toPromise();
    return learner;
  }

  async removeLearner(learner:Learner){
    return await this.http.delete(`http://34.122.220.146:8080/learners/${learner.learnerId}`,this.httpOptions).toPromise();
  }
}
