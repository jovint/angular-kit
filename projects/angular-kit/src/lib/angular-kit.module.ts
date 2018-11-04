import { NgModule } from '@angular/core';
import { AngularKitComponent } from './angular-kit.component';
import { InputComponent } from './input-component/input-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularKitService } from './angular-kit.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './form/form.component';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [AngularKitComponent, ButtonComponent,
     SelectComponent, DynamicFieldDirective, CheckboxComponent,
     DynamicFormComponent, InputComponent, RadiobuttonComponent],
  exports: [DynamicFieldDirective, SelectComponent, ButtonComponent,
     DynamicFormComponent, InputComponent, RadiobuttonComponent, CheckboxComponent],
  providers: [AngularKitService],
  entryComponents: [InputComponent, CheckboxComponent,
     RadiobuttonComponent, ButtonComponent, SelectComponent]
})
export class AngularKit { }
