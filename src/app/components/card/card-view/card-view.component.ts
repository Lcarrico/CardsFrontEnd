import { Component, Input, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card/card.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  showingTitle = "Question";
  showingContent = "What is 1+1?";
  flipped = false;
  flipping = false;

  card:Card = new Card(0, "What is 1+1", "2");

  @Input() cardId: string = "";
  
  constructor(private cardService:CardService) { }

  ngOnInit(): void {
    console.log(this.cardId)
    this.setCard();
    this.showingContent = this.card.question;
  }

  async setCard(){
    const cardIdNum:number = Number(this.cardId)
    console.log(cardIdNum);
    if (cardIdNum != 0)
      this.card = await this.cardService.getCardById(cardIdNum);
    this.refresh();
  }

  refresh(){
    if (this.showingTitle == "Question"){
      this.showingContent = this.card.question;
    } else if (this.showingTitle == "Answer") {
      this.showingContent = this.card.answer;
    }
  }

  toggleDisplay(){
    if (this.showingTitle == "Question"){
      this.showingTitle = "Answer";
      this.showingContent = this.card.answer;
    } else if (this.showingTitle == "Answer"){
      this.showingTitle = "Question";
      this.showingContent = this.card.question;
    }
    setTimeout(() => this.flipping = false,700);
  }

  flipCard(){
    if (!this.flipping){
      this.flipping = true;
      this.flipped = !this.flipped;
      setTimeout(() => this.toggleDisplay(),300);
    }

  }

}
