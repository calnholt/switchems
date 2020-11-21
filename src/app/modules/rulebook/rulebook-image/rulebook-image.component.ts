import { MonsterComplete } from './../../monster/model/monster';
import { RulebookImageType } from './../rulebook.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rulebook-image',
  templateUrl: './rulebook-image.component.html',
  styleUrls: ['./rulebook-image.component.scss']
})
export class RulebookImageComponent implements OnInit {
  @Input() type: RulebookImageType;
  @Input() monster?: MonsterComplete;
  constructor() { }

  ngOnInit() {
  }

}
