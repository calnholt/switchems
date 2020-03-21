import { ToolbarService } from './toolbar.service';
import { Path } from './../../../../types/dataTypes';
import { Component, OnInit } from '@angular/core';
import { Router, Event } from '@angular/router';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  visible: boolean;
  logo: Path = '../../../../assets/images/website/logo.png';

  constructor(public toolbarService: ToolbarService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      this.toolbarService.show();
    });
  }

}
