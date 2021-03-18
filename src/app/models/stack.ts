import { Card } from 'src/app/models/card';
import { Tag } from 'src/app/models/tag';

export class Stack{
    constructor(
        public stackId:number,
        public name:string,
        public description:string,
        public creatorId:number,
        public cards:Card[],
        public tags:Tag[]        
    ){}
    
}