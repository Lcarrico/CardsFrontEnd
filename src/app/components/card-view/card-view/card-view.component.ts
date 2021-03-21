import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  showingTitle = "Question";
  showingContent = "What is 1+1?";
  card:Card = new Card(0, "How can Leo be so handsome?", "he's built different");

  flipped = false;
  flipping = false;
  constructor() { }

  ngOnInit(): void {
   this.showingContent = this.card.question;
    // TODO set card to an actual card from http request
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
