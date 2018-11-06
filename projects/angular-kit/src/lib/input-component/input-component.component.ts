import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Props } from '../utils/props.interface';
@Component({
  selector: 'lib-input-field',
  template: `<div class="form-group">
  <label *ngIf="field.label" [for]="field.id ? field.id : ''">{{field.label}}</label>
  <div [class]="'input-group '+ field.classes" [formGroup]="group">
    <div *ngIf="field.prepend" class="input-group-prepend">
      <span class="input-group-text" [id]="field.id ? field.id : ''">{{field.prepend}}</span>
    </div>
    <input [type]="field.inputType"
     (change)="checkIfValid(field.name,field.validations)"
      [formControlName]="field.name" class="form-control"
      [class.is-invalid]="invalid" [placeholder]="field.placeholder ? field.placeholder : ''">
    <ng-container *ngFor="let validation of field.validations;">
      <div class="invalid-feedback">{{validation.message}}</div>
    </ng-container>
  </div>
</div>`,
  styles: []
})
export class InputComponent implements OnInit {
 public group: FormGroup;
 public field: Props;
 public invalid: boolean;
  constructor() { }

  ngOnInit() {
    this.invalid = false;
  }

  checkIfValid(fieldName , validations) {
    validations.forEach( validation => {
      if (this.group.get(fieldName).hasError(validation.name)) {
            this.invalid = true;
      }
    });
  }

}
