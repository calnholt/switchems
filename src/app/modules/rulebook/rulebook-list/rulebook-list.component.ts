import { RulebookBlock } from './../rulebook.component';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rulebook-list',
  templateUrl: './rulebook-list.component.html',
  styleUrls: ['./rulebook-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RulebookListComponent implements OnInit {
  @Input() item: RulebookBlock;
  @Input() displayFnc: Function;
  constructor() { }

  ngOnInit() {
  }

}
