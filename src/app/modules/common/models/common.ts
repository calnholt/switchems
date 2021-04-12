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
