import {
    Directive, OnInit, HostListener
  } from '@angular/core';

  @Directive({
    selector: '[error-a]'
  })
  export class ErrorClassAppendDirective implements OnInit {

    constructor() {}

    ngOnInit() {

    }

    @HostListener('click')
    public handleSubmit() {
        document.querySelectorAll('.form-control').forEach( e => {
            if (e.classList.contains('ng-invalid')) {
                (<HTMLElement>e).classList.add('is-invalid');
            } else {
                (<HTMLElement>e).classList.remove('is-invalid');
            }
        });
    }
}
