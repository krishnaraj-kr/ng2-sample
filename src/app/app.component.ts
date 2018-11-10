import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  template: `
  	<h1> Hello !!! </h1>
  	User Name: <input type="text" name="userName" [(ngModel)]="userName" >
  	{{userName}}
  `,
  providers: [AppService]
})

export class AppComponent  { 
	userName: string = '';

	constructor(private _appService: AppService) {
		this.getName();
	}

	getName() {
		this.userName = this._appService.getName();
	}

}
