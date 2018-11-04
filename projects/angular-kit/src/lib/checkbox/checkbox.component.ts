import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Props } from '../utils/props.interface';
@Component({
  selector: "lib-checkbox",
  template: `
  <div class="form-group">
  <label *ngIf="field.label" [for]="field.id ? field.id : ''">{{field.label}}</label>
<div [class]="'input-group '+ field.classes" [formGroup]="group">
  <ng-container *ngFor="let item of field.options">
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" [value]="item" />
      <label class="form-check-label">{{item}}</label>
    </div>
  </ng-container>
</div>
</div>
`,
  styles: []
})
export class CheckboxComponent implements OnInit {
  field: Props;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
