import { Component, ViewChild } from '@angular/core';
import { Props } from 'projects/angular-kit/src/lib/utils/props.interface';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submit(value: any) {
    debugger;
  }
  title = 'angular-ui-kit';
  regConfig: Props[] = [
    {
      type: 'input',
      label: 'Username',
      inputType: 'text',
      classes: '',
      name: 'name',
      valid: false,
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Name Required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accept only text'
        }
      ]
    }
    ,
    {
      type: "select",
      label: "Country",
      name: "country",
      value: "UK",
      options: ["India", "UAE", "UK", "US"]
    },
    {
      type: 'input',
      label: 'Email Address',
      inputType: 'text',
      classes: '',
      name: 'email',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Email Required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern(
            '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
          ),
          message: 'Invalid email'
        }
      ]
    },
    {
      type: "radiobutton",
      label: "Gender",
      name: "gender",
      options: ["Male", "Female"],
      value: "Male"
    },
    {
      type: "button",
      label: "Save",
      classes:'btn-primary'
    },
    {
      type: 'input',
      label: 'Password',
      inputType: 'password',
      classes: '',
      name: 'password',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Password Required'
        }
      ]
    }
  ];
}
