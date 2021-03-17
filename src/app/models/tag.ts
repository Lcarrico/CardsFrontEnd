import { Card } from "src/app/models/card";
import { Stack } from "src/app/models/stack";

export class Tag{
    constructor(
        public tagId:number,
        public tagName:string,
        public stacks:Stack[],
        public cards:Card[]
    ){}
}