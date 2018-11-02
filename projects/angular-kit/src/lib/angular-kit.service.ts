import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularKitService {

  constructor() { }

  convertToJSONObject(value): Object {

    return JSON.parse(value);
  }
}
