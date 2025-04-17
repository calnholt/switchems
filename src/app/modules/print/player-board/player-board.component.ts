import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Path } from 'src/app/types/dataTypes';
import { SYMBOLS } from 'src/app/constants';

@Component({
  selector: 'player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.scss'],
  // needed to render [innerHTML] class styling
  encapsulation: ViewEncapsulation.None,
})
export class PlayerBoardComponent implements OnInit {
  @Input() text: string;
  icon: Path;

  constructor() { }

   getIcon(): Path {
    if (this.text === 'Buffs') {
      return SYMBOLS + 'buff.png';
    } else if (this.text === 'Discards') {
      return SYMBOLS + 'discard.png';
    } else if (this.text.includes('Hand')) {
      return SYMBOLS + 'hand-of-cards.png';
    }
    return null;
   }

  ngOnInit() { }



}
