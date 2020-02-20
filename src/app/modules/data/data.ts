import { TermCode, ImageCode, Path } from './../../types/dataTypes';

export class Term {
    key: TermCode;
    value: string;

    constructor(key: TermCode, value: string) {
        this.key = key;
        this.value = value;
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
