import { Buff } from 'src/app/modules/monster/model/monster';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rulebook-buff',
  templateUrl: './rulebook-buff.component.html',
  styleUrls: ['./rulebook-buff.component.scss']
})
export class RulebookBuffComponent implements OnInit {
  @Input() buff: Buff;
  numbers = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
  }

}
