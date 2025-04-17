import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ICON_PATH } from 'src/app/types/dataTypes';
import { Badge } from './badge.model';
import { getAbilityText } from '../../common/cards';

@Component({
  selector: 'badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BadgeComponent implements OnInit {
  @Input() badge: Badge;
  img: string;
  text: string;
  usesList = [];
  roundsList = [];

  constructor() { }

  ngOnInit(): void {
    this.img = `${ICON_PATH}/badges/${this.badge.name.toLowerCase()}.png`;
    this.text = getAbilityText(this.badge.text, 'term', 'term-img');
    if (this.badge.uses) {
      this.usesList = [ ...Array(this.badge.uses).keys()];
    }
    if (this.badge.rounds) {
      this.roundsList = [ ...Array(this.badge.rounds + 1).keys()];
    }
  }

}
