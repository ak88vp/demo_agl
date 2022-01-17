import {Component, Input, OnInit} from '@angular/core';
import {Ak88Component} from "../ak88/ak88.component";

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent extends Ak88Component implements OnInit {
  // @ts-ignore
  @Input() cardName: string;
  // @ts-ignore
  @Input() email: string;
  // @ts-ignore
  @Input() phone: string;
  constructor() {
    super();

  }

  // @ts-ignore
  ngOnInit = (): void => {

  };

}
