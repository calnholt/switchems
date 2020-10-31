import { Component, OnInit, Input } from '@angular/core';
import { MonsterComplete } from '../model/monster';

@Component({
  selector: 'extra-board',
  templateUrl: './extra-board.component.html',
  styleUrls: ['./extra-board.component.scss']
})
export class ExtraBoardComponent implements OnInit {
  @Input() monster: MonsterComplete;
  constructor() { }

  ngOnInit() {
  }

}
