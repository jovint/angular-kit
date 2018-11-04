import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Props } from '../utils/props.interface';
@Component({
  selector: 'app-button',
  template: `
<div class='form-group' [formGroup]='group'>
  <button type='submit' [class]="'btn '+ field.classes">{{field.label}}</button>
</div>
`,
  styles: []
})
export class ButtonComponent implements OnInit {
  field: Props;
  group: FormGroup;
  constructor() {}
  ngOnInit() {
  }

}
