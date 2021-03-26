import { Component, Input, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { Tag } from 'src/app/models/tag';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card/card.service';
import { TagService } from 'src/app/services/tag/tag.service';
import { TagLinkService } from 'src/app/services/tagLink/tag-link.service';
import { TagLink } from 'src/app/models/tagLink';
import { CardLinkService } from 'src/app/services/cardLink/card-link.service';
import { StackLinkService } from 'src/app/services/stackLink/stack-link.service';
import { CardLink } from 'src/app/models/cardLink';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {

  _ref:any;
  constructor(private cardService:CardService, private tagService:TagService, private tagLinkService:TagLinkService, 
    private cardLinkService:CardLinkService) { }

  @Input() cardId: string = "0";
  @Input() stackId: string = "0";

  ngOnInit(): void {
    this.setCard();
    this.setTags();
  }

  card:Card = new Card(0, "Question?", "Answer")
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: Tag[] = [

  ];

  async setCard(){
    const cardIdNum:number = Number(this.cardId);
    if (cardIdNum != 0)
      this.card = await this.cardService.getCardById(cardIdNum);
  }

  async setTags(){
    const cardIdNum:number = Number(this.cardId);
    let tagLinks:TagLink[] = await this.tagLinkService.getTagLinksByCardId(cardIdNum);

    let tempTags:Tag[] = [];
    for (let tempTagLink of tagLinks){
      const tempTag:Tag = await this.tagService.getTagById(tempTagLink.tagId);
      tempTags.push(tempTag);
    }
    this.tags = tempTags;
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push(new Tag(0, value.trim()));
    }

    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  async createNecessaryTags(){
    this.addTagsToCard();
  }

  async addTagsToCard(){
    let tagIds = this.tags.map((tag)=>{return tag.tagId});
    console.log(tagIds);

    let tagLinks = await this.tagLinkService.getTagLinksByCardId(Number(this.cardId));
  }

  async submit(){
    if (Number(this.card.cardId) == 0){
      // create the card
      this.card = await this.cardService.createCard(this.card);
    } else {
      // update the card info
      console.log(this.card);
      this.card = await this.cardService.updateCard(this.card);
    }

    this.cardLinkService.createCardLink(new CardLink(0, Number(this.card.cardId), 
      Number(this.stackId)));

    console.log(this.card);

    // // create the non-existing tags
    // for (let i = 0; i < this.tags.length; i++){
    //   const pulledTag = await this.tagService.getTagByName(this.tags[i].tagName);
    //   if (pulledTag == null){
    //     this.tags[i] = await this.tagService.createTag(this.tags[i]);
    //   } else {
    //     this.tags[i] = pulledTag;
    //   }
    // }

    // add the tags to the cards

  }
}
