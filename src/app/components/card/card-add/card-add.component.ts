import { componentFactoryName } from '@angular/compiler';
import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CardEditComponent } from '../card-edit/card-edit.component';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  
  @Input() stackId = "0";

  cardEditComponentClass = CardEditComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  addCardEdit(){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.cardEditComponentClass);    
    let component = this.container.createComponent(componentFactory);
    
    console.log(component.instance);
    component.instance.stackId = this.stackId;
  }

}
