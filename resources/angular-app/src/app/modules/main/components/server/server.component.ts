import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId : number = 10;
  serverName : string;
  allowServer : boolean = true;
  serverStatus=''; serverStat = 'offline';
  constructor() {
    setTimeout(() => this.allowServer = false ,2000);
    this.serverStat = Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit() {
  }

  getServerName(){
    return  this.serverName = 'shifas';
  }

  onAddServer(){
    this.serverStatus = 'online';
    // this.serverStatus = "One New Server has created! "; 
  }

  getServerStatus(){
    return this.serverStat === 'online' ? 'green' : 'red';
  }
  data = [];
  onAddData(){
    return this.data.push(new Date());
  }

}
