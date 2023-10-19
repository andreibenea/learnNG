import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
    console.log(event.target.value)
  }

  onCreateServer() {
    this.serverCreationStatus = `Server named \'${this.serverName}\' was created`;
  }
}
