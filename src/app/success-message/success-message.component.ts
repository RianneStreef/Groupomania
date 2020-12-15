import { Component } from '@angular/core';

@Component({
  // This is how you use your component
  selector: 'app-success-message',
  // This is what is being generated in the component and
  //    displayed to the user
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss'],
})
export class SuccessMessageComponent {
  title = 'Server Component';
  isServerAdded = false;

  // For button demo
  isButtonDisabled = true;
  buttonText = 'Not Ready';

  // For input demo
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.isButtonDisabled = false;
      this.buttonText = 'Ready!';
    }, 2000);
  }

  ngOnInit() {}

  addServer() {
    this.isServerAdded = !this.isServerAdded;
  }

  handleChange(event) {
    this.serverName = event.target.value;
  }

  // Your main component
}
