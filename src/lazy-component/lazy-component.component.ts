import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-component',
  standalone: true,
  template: `template`
})
export class LazyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}