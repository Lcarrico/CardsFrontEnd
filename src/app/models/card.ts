export class Card{
    constructor(
        public cardId:number,
        public question:string,
        public answer:string,
        public creatorId:number,
        public tags:string[]
    ){}
}