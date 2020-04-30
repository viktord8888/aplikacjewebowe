import { Field } from "./Field";

export class SelectField implements Field {
    name: string;
    area: HTMLElement;
    element: HTMLSelectElement;
    constructor(name: string, optionName: string[]) {
        this.area = <HTMLElement>document.createElement('p');
        this.element = <HTMLSelectElement>document.createElement('select');
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element);
        for (let i = 0; i < optionName.length; i++) {
            let option = <HTMLOptionElement>document.createElement('option');
            option.appendChild(document.createTextNode(optionName[i]));
            option.value = optionName[i];
            this.element.appendChild(option);
        }
        this.name = name;
        this.element.name = this.name;
    }
    render(): HTMLElement {
        return this.area;
    }
    getValue(): any {
        return this.element.name + this.element.value;
    }
}