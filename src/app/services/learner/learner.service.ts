import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Learner } from 'src/app/models/learner';

@Injectable({
  providedIn: 'root'
})
export class LearnerService {

  constructor(private http:HttpClient) { }

  async createLearner(learner:Learner):Promise<Learner> {
    learner = await this.http.post<Learner>(`http://34.122.220.146:8080/learners`,learner).toPromise();
    return learner;
  }

  async getLearnerById(id:number){
    const learners:Learner[] = await this.http.get<Learner[]>(`http://34.122.220.146:8080/learners/${id}`).toPromise();
    return learners;
  }

  async getLearnerByUsername(username:string){
    const learners:Learner[] = await this.http.get<Learner[]>(`http://34.122.220.146:8080/learners/${username}`).toPromise();
    return learners;
  }

  async getAllLearners(){
    const learners:Learner[] = await this.http.get<Learner[]>(`http://34.122.220.146:8080/learners`).toPromise();
  }

  async updateLearner(learner:Learner){
    learner = await this.http.put<Learner>(`http://34.122.220.146:8080/learners`,learner).toPromise();
    return learner;
  }

  async removeLearner(learner:Learner){
    return await this.http.delete(`http://34.122.220.146:8080/learners/${learner.learnerId}`).toPromise();
  }
}
