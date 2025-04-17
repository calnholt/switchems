import { Component, OnInit, Input } from '@angular/core';
import { Action } from 'src/app/modules/monster/model/monster';

@Component({
  selector: 'rulebook-action',
  templateUrl: './rulebook-action.component.html',
  styleUrls: ['./rulebook-action.component.scss']
})
export class RulebookActionComponent implements OnInit {
  @Input() action: Action;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() { }

  ngOnInit() {
  }

}
