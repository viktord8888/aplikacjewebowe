import { Field } from "./Field";

export class InputField implements Field {
    name: string;
    area: HTMLElement;
    element: HTMLInputElement;
    constructor(name: string) {
        this.area = <HTMLElement>document.createElement('p');
        this.element = <HTMLInputElement>document.createElement('input');
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element);
        this.name = name;
        this.element.name = this.name;
        this.element.type = 'textBox';
    }
    render(): HTMLElement {
        return this.area;
    }
    
    getValue(): any {
        let table: HTMLTableElement = <HTMLTableElement> document.getElementById('table');
        let element: HTMLElement = <HTMLElement> document.createElement('tr');
        let elementName: HTMLElement = <HTMLElement> document.createElement('th');
        let elementValue: HTMLElement = <HTMLElement> document.createElement('td');

        elementName.innerHTML = this.element.name;
        elementValue.innerHTML = this.element.value;

        table.appendChild(element)
        element.appendChild(elementName);
        element.appendChild(elementValue);

        let deleteButton: HTMLElement = <HTMLElement> document.createElement('button');
        deleteButton.innerHTML = "X";
        deleteButton.addEventListener('click', ()=> elementValue.innerHTML = "");

        element.appendChild(deleteButton);

        localStorage.setItem(this.element.name, this.element.value);
        JSON.stringify(localStorage);

        return this.element.name + this.element.value;
    }
}
