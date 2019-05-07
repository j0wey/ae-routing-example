import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ae-child-b',
  template: `<h1>This is child B (a normal Angular component) INSIDE the Angular Element</h1>`,
  styles: []
})
export class AeChildBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}