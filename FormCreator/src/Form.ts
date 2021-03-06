import { Field } from "./Field";

export class Form {
    fields: Field[];
    formElement: HTMLElement;
    constructor(id: string) {
        this.fields = new Array();
        this.formElement = <HTMLElement>document.getElementById(id);
    }
    render(): void {
        this.fields.forEach(element => {
            this.formElement.appendChild(element.render());
        });
    }
    addField(field: Field): void {
        this.fields.push(field);
    }
    getValue(): void {
        this.fields.forEach(element => {
            console.log(element.getValue());
        });
    }
}