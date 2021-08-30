import { Component, OnInit } from '@angular/core';

@Component({
  // Selector works similarly as CSS we can also use [app-server] to make it select attribute or for class we can use .
  // In the HTML portion to select these an example may be <div app-servers></div> using [] as the selector
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  constructor(){
    setTimeout(()=> { this.allowNewServer = true})
   }

  ngOnInit(): void {
  }

}
