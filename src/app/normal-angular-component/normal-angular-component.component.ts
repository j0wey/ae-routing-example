import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-angular-component',
  template: `<h1>This is a normal Angular component</h1>`,
  styles: ['./normal-angular-component.component.css']
})
export class NormalAngularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}