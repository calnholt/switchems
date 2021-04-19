import { ElemType } from 'src/app/types/dataTypes';
import { HP_PATH, ELEMENT_PATH_GRAY, ELEMENT_PATH_COLOR, SYMBOLS_PATH } from './../../types/dataTypes';
import { Injectable } from '@angular/core';
import { Path } from '../common/models/common';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  constructor() { }

  getImg(str: string): Path {
    return this.getPath(SYMBOLS_PATH, str.toLowerCase());
  }

  getElementImg(elemType: ElemType): Path {
    return this.getPath(ELEMENT_PATH_COLOR, elemType.toLowerCase());
  }

  getHpImg(num: number): Path {
    return this.getPath(HP_PATH, num);
  }

  getGrayImg(elemType: ElemType): Path {
    return this.getPath(ELEMENT_PATH_GRAY, elemType.toLowerCase());
  }

  getPath(path: Path, value: number | string): Path {
    return path + value + '.png';
  }

}
