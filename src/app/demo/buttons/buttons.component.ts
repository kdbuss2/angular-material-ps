import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <button mat-button>
  <mat-icon>face</mat-icon>
  Click Me!
</button>

<mat-checkbox>Check me!</mat-checkbox>
  `,
  styles: [  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
