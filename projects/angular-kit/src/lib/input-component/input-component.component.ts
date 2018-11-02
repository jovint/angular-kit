import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Props } from '../utils/props.interface';
@Component({
  selector: 'lib-input-field',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponent implements OnInit {
 public group: FormGroup;
 public field: Props;

  constructor() { }

  ngOnInit() {
  }

}
