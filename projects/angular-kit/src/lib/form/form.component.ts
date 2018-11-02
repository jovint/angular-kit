import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Props } from '../utils/props.interface';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  exportAs: 'angular-form',
  selector: 'lib-angular-form',
  template: `
  <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)">
  <ng-container *ngFor="let field of props;" dynamicField [field]="field" [group]="form">
  </ng-container>
  </form>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit {
  @Input() props: Props[] = [];

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;

  get formValue() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createFormControls();
    console.log(this.props)
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateFormFields(this.form);
    }
  }

  createFormControls() {
    const group = this.fb.group({});
    this.props.forEach(prop => {
      if (prop.type === 'button') {
        return;
      }
      const control = this.fb.control(
        prop.value,
        this.bindValidations(prop.validations || [])
      );
      group.addControl(prop.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
