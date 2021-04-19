import { SYMBOLS } from './../../../constants';
import { Component, OnInit } from '@angular/core';
import { Path } from '../../common/models/common';

@Component({
  selector: 'acorn-board',
  templateUrl: './acorn-board.component.html',
  styleUrls: ['./acorn-board.component.scss']
})
export class AcornBoardComponent implements OnInit {

  acorn: Path = SYMBOLS + 'acorn.png';
  speed: Path = SYMBOLS + 'speed.png';
  attack: Path = SYMBOLS + 'attack.png';
  defense: Path = SYMBOLS + 'defense.png';
  arrow: Path = SYMBOLS + 'sideswipe.png';

  constructor() { }

  ngOnInit() {
  }

}
