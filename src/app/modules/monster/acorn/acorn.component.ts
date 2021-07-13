import { Component, OnInit } from '@angular/core';
import { Path, SYMBOLS_PATH } from 'src/app/types/dataTypes';

@Component({
  selector: 'acorn',
  templateUrl: './acorn.component.html',
  styleUrls: ['./acorn.component.scss']
})
export class AcornComponent implements OnInit {

  acorn: Path = SYMBOLS_PATH + 'acorn.png';
  attack: Path = SYMBOLS_PATH + 'attack.png';
  defense: Path = SYMBOLS_PATH + 'defense.png';
  speed: Path = SYMBOLS_PATH + 'speed.png';

  constructor() { }

  ngOnInit() {
  }

}
