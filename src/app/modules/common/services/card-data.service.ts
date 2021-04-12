import { Injectable } from '@angular/core';
import { DropdownOption } from '../models/common';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

constructor() { }

  getSearchOptions(property: string, data: Array<any>, routerLink: string): Array<DropdownOption> {
    let searchOptions = Array<DropdownOption>();
    if (!data || !data.length) {
      return searchOptions;
    }
    data.forEach(d => {
      let name = this.getNestedProperty(property, d).toString();
      let rl = `${routerLink}/${name}`;
      searchOptions.push(new DropdownOption(name, rl));
    });
    return searchOptions;
  }

  private getNestedProperty(property: string, obj: any): any {
    let properties = property.split('.');
    let out = {};
    properties.forEach(prop => out = obj[prop]);
    return out;
  }

}
