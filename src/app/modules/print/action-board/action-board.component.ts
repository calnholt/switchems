import { Path, SYMBOLS_PATH } from './../../../types/dataTypes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'action-board',
  templateUrl: './action-board.component.html',
  styleUrls: ['./action-board.component.scss']
})
export class ActionBoardComponent implements OnInit {
  cube: Path = SYMBOLS_PATH + 'green-cube.png';
  switchLeft: Path = SYMBOLS_PATH + 'switch-left.png';
  switchRight: Path = SYMBOLS_PATH + 'switch-right.png';
  draw: Path = SYMBOLS_PATH + 'draw.png';
  discard: Path = SYMBOLS_PATH + 'discard.png';
  counter: Path = SYMBOLS_PATH + 'counter.png';
  heal: Path = SYMBOLS_PATH + 'heart.png';
  status: Path = SYMBOLS_PATH + 'wound.png';
  manuever: Path = SYMBOLS_PATH + 'blue-cube.png';
  flip: Path = SYMBOLS_PATH + 'flip.png';
  speed: Path = SYMBOLS_PATH + 'speed.png';
  defense: Path = SYMBOLS_PATH + 'defense.png';
  attack: Path = SYMBOLS_PATH + 'attack.png';

  constructor() { }

  ngOnInit() {
  }

  getIcon = (name: string) => {
    return `${SYMBOLS_PATH}${name}.png`;
  }

}
