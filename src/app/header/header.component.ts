import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

/* function fnThatIsFake() {
  // Flag is just a boolean in computer science
  //    that marks something
  const age = 50;

  if (age > 18) {
    return 'Legal drinking age'
  } else {
    return 'Not permitted'
  }

  // Ternary Operator:
              // Condition    // True part          // False
  const test = age > 18 ? 'Legal drinking age' : 'Not permitted'

  // Can't have this:

  if (age > 18) {
    return 'Legal drinking age';
  } else if (age > 21) {
    return 'Legal driving age';
  } else {
    return 'Not permitted'
  }
} */
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  name = 'Rianne';
  constructor() {}

  ngOnInit(): void {}

  // Functions ALWAYS has a verb
  changeLoginStatus() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  getColor() {
    return this.isLoggedIn ? 'green' : 'red';
  }
}
