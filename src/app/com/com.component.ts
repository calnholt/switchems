import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com',
  template: `
    <p>
      com works!
    </p>
  `,
  styles: []
})
export class ComComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
