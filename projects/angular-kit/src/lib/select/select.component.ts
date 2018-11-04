import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Props } from '../utils/props.interface';
@Component({
  selector: 'lib-select',
  template: `
  <div class="form-group">
  <label *ngIf="field.label" [for]="field.id ? field.id : ''">{{field.label}}</label>
<select [class]="'input-group custom-select '+ field.classes" [formGroup]='group'>
  <ng-container *ngFor='let item of field.options'>
      <option [value]='item'>{{item}}</option>
  </ng-container>
</select>
</div>
`,
  styles: []
})
export class SelectComponent implements OnInit {
  field: Props;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
