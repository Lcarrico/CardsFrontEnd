import { Component, Input, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { Tag } from 'src/app/models/tag';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card/card.service';
import { TagService } from 'src/app/services/tag/tag.service';
import { TagLinkService } from 'src/app/services/tagLink/tag-link.service';
import { TagLink } from 'src/app/models/tagLink';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {

  constructor(private cardService:CardService, private tagService:TagService, private tagLinkService:TagLinkService) { }

  @Input() cardId: string = "1";

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
    new Tag(0, "Math"),
    new Tag(1, "Pre-Alg"),
    new Tag(2, "Elementary Math"),
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
}
