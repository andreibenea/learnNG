import { Component } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent {
  username = '';
  usernameExists = false;
  updateUsername(event: any) {
    console.log(event)
    this.username = event.target.value;
    this.usernameExists = true;
  }
  onResetUsername(event: any) {
    this.username = '';
    this.usernameExists = false;
  };
}
