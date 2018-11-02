import { NgModule } from '@angular/core';
import { AngularKitComponent } from './angular-kit.component';
import { InputComponent } from './input-component/input-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularKitService } from './angular-kit.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './form/form.component';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [AngularKitComponent, DynamicFieldDirective, DynamicFormComponent, InputComponent],
  exports: [DynamicFieldDirective, DynamicFormComponent, InputComponent],
  providers: [AngularKitService],
  entryComponents: [InputComponent]
})
export class AngularKit { }
