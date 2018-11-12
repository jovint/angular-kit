UI Kit for Angular 7+ based  on bootstrap 4.

#Installation

    npm i angular-bootstrap-kit
    
#Usage

Import the module

    import { AngularKit } from 'angular-bootstrap-kit';
    
Add it in imports array

    imports: [BrowserModule, AngularKit]
    

Use the module in template

    <lib-angular-form [props]="config" (submit)="submit($event)"></lib-angular-form>

   
