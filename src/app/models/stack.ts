import { Card } from 'src/app/models/card';
import { Learner } from 'src/app/models/learner';

export class Stack{

    constructor(
        public stackId:number,
        public name:string,
        public description:string,
        public creatorId:number,
        public cards:Card[]
    ){}
    
}