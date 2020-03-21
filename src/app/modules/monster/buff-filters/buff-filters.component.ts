import { BUFF_TIMINGS } from './../../../types/dataTypes';
import { Component, OnInit, Input } from '@angular/core';
import { Buff } from '../model/monster';

@Component({
  selector: 'buff-filters',
  templateUrl: './buff-filters.component.html',
  styleUrls: ['./buff-filters.component.scss']
})
export class BuffFiltersComponent implements OnInit {
  @Input() buff: Buff;
  buffTimings = BUFF_TIMINGS;
  buffText: string;
  noneText: string = 'This card has no buff effect.';

  constructor() { }

  ngOnInit() {
    if (this.buff.timing !== 'None') {
      this.buffText = this.buff.buffText;
    }
  }

  setNoneText(timing: any) {
    if (this.buff.timing === 'None') {
      this.buffText = this.buff.buffText;
      this.buff.buffText = this.noneText;
    } else if (this.buffText !== this.noneText) {
      this.buff.buffText = this.buffText;
    }
  }

}
