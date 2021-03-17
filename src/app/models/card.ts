export class Card{

    constructor(
        public cardId:number,
        public question:string,
        public answer:string,
        public creatorId:number,
        public stackId:number,
        public tags:string[],
    ){}
}