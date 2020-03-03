import { Path } from './../../../../types/dataTypes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  logo: Path = '../../../../assets/images/website/logo.png';

  constructor() { }

  ngOnInit() {
  }

}
