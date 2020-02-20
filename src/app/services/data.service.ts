import { TERM_CODES, IMAGE_CODES } from './../types/dataTypes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ADVANTAGES: any = {
    Fire: {
      advantages: [0, -1, -1, 1, 1, 0],
    },
    Water: {
        advantages: [1, 0, 0, -1, -1, 1],
    },
    Rock: {
        advantages: [1, 0, 0, -1, 1, -1],
    },
    Leaf: {
        advantages: [-1, 1, 1, 0, 0, -1],
    },
    Electric: {
        advantages: [-1, 1, -1, 0, 0, 1],
    },
    Death: {
        advantages: [0, -1, 1, 1, -1, 0],
    },
  };

  getAdvantages() {
    return this.ADVANTAGES;
  }

  // not currently being used
  // parseTextForImages(text: string, css: string) {
  //   let innerHtml = text;
  //   const termsArr: string[] = [];
  //   Object.keys(TERM_CODES).forEach(term => termsArr.push(term));
  //   TERM_CODES.forEach((term) => {
  //     while (innerHtml.includes(term)) {
  //         const html = `<br><span class="${css}">(${TERM_CODES[term]})</span>`;
  //         innerHtml = innerHtml.replace(term, html);
  //     }
  //   });
  //   return innerHtml;
  // }

constructor() { }

}
