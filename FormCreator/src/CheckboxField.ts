import { Field } from "./Field";

export class CheckboxField implements Field {
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
        this.element.type = 'checkbox';
    }
    render(): HTMLElement {
        return this.createTable() && this.area;
    }

    createTable() {
        let table: HTMLTableElement = <HTMLTableElement> document.getElementById('table');
        let elementName: HTMLElement = <HTMLElement> document.createElement('th');
        elementName.setAttribute('id', 'elementName');

        elementName.innerHTML = this.element.name;

        table.appendChild(elementName);

        return table;
    }

    deleteFromTable() {
        let table: HTMLTableElement = <HTMLTableElement> document.getElementById('table');
        let elementName: HTMLElement = <HTMLElement> document.getElementById('elementName');
        let elementValue: HTMLElement = <HTMLElement> document.createElement('td');
        
        table.appendChild(elementName);
        elementName.appendChild(elementValue);

        elementValue.innerHTML = "";
    }
    
    getValue(): any {
        let table: HTMLTableElement = <HTMLTableElement> document.getElementById('table');
        let elementName: HTMLElement = <HTMLElement> document.getElementById('elementName');
        let elementValue: HTMLElement = <HTMLElement> document.createElement('td');
        
        table.appendChild(elementName);
        elementName.appendChild(elementValue);

        if (this.element.checked)
            elementValue.innerHTML = "TAK";
        else
            elementValue.innerHTML = "NIE"

        return this.element.name + this.element.value;
    }
}
