export class DropdownOption {
    description?: string;
    routerLink?: string;
    value?: string;
    constructor(name?: string, routerLink?: string) {
        this.description = name;
        this.routerLink = routerLink;
    }
}

export class ToolbarTab {
    name?: string;
    routerLink?: string;
    param?: string;
    constructor(name?: string, routerLink?: string, param?: string) {
        this.name = name;
        this.routerLink = routerLink;
        this.param = param;
    }
}

export type Url = string;
export type Path = string;
export type Css = string;
export type IconCode = string;
export type TermCode = string;

export class Image {
    key: IconCode;
    path: Path;

    constructor(key: IconCode, path: Path) {
        this.key = key;
        this.path = path;
    }
}

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

export class AccordianSegment {
    description: string;
    value: string;

    constructor(description: string, value: string) {
        this.description = description;
        this.value = value;
    }

    static getImageAccordianSegments(images: Array<Image>): Array<AccordianSegment> {
        let out = new Array<AccordianSegment>();
        images.forEach(i => out.push(new AccordianSegment(i.path, i.key)))
        return out;
    }
    static getTermAccordianSegments(images: Array<Term>): Array<AccordianSegment> {
        let out = new Array<AccordianSegment>();
        images.forEach(i => out.push(new AccordianSegment(i.name, i.key)))
        return out;
    }
}