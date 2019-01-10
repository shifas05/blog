import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from './modules/main/services/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  login : boolean;
  constructor( 
  	private jwtService: JwtService,
  	private router: Router, 
   ){}

  ngOnInit() {
    this.check();
  }

  logout(){
  	if(this.jwtService.logout())
  	{
  		this.router.navigate(['/login']);
  	}
  }

  check(): boolean{
    if(this.jwtService.loggedIn)
    {
      return this.login = true;
    }
    return this.login = false;
  }

}
