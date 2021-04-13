import { ToolbarService } from '../../services/toolbar.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, Event } from '@angular/router';
import { DropdownOption, ToolbarTab } from '../../models/common';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string;
  @Input() searchOptions: Array<DropdownOption>;
  @Input() tabs: Array<ToolbarTab>;
  searchOption: DropdownOption = new DropdownOption();

  constructor(public toolbarService: ToolbarService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      this.toolbarService.show();
    });
  }

  selectTab(tab: ToolbarTab) {
    let link = tab.param? [`${tab.routerLink}`, tab.param] : [`${tab.routerLink}`];
    this.router.navigate(link, {});
  }

}
