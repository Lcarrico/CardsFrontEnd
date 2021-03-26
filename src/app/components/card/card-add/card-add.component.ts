import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CardEditComponent } from '../card-edit/card-edit.component';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  
  cardEditComponentClass = CardEditComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  addCardEdit(){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.cardEditComponentClass);
    const component = this.container.createComponent(componentFactory);
    // console.log(component);
  }

}
