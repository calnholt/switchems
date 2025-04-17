import { TermCode, ImageCode, Path, ElemType } from './../../types/dataTypes';

export class Term {
    key: TermCode;
    value: string;
    name: string;

    constructor(name: string, key: TermCode, value: string) {
        this.key = key;
        this.value = value;
        this.name = name;
    }
}

export class Image {
    key: ImageCode;
    path: Path;

    constructor(key: ImageCode, path: Path) {
        this.key = key;
        this.path = path;
    }
}

export class TypeChart {
    element: ElemType;
    strongAgainst: Array<ElemType> = new Array;
    weakAgainst: Array<ElemType> = new Array;

    constructor(elemType: ElemType) {
        this.element = elemType;
        switch (elemType) {
            case ('Fire'):
                this.strongAgainst.push('Electric', 'Leaf');
                this.weakAgainst.push('Water', 'Rock');
                break;
            case ('Water'):
                this.strongAgainst.push('Fire', 'Death');
                this.weakAgainst.push('Leaf', 'Electric');
                break;
            case ('Leaf'):
                this.strongAgainst.push('Rock', 'Water');
                this.weakAgainst.push('Fire', 'Death');
                break;
            case ('Rock'):
                this.strongAgainst.push('Fire', 'Electric');
                this.weakAgainst.push('Leaf', 'Death');
                break;
            case ('Electric'):
                this.strongAgainst.push('Death', 'Water');
                this.weakAgainst.push('Fire', 'Rock');
                break;
            case ('Death'):
                this.strongAgainst.push('Leaf', 'Rock');
                this.weakAgainst.push('Water', 'Electric');
            }
    }
}
