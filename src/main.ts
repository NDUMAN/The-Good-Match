import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  function calcperc(){


		const name1=<HTMLInputElement>document.getElementById('name1');
		const name2=<HTMLInputElement>document.getElementById('name2');
		const error=<HTMLInputElement>document.getElementById('error');
		const answer=<HTMLElement><unknown>document.getElementsByClassName('heading');
		const message=<HTMLElement><unknown>document.getElementsByClassName('message');

         if(name1.value==""||name2.value==""){
			error.style.visibility="visible";
			error.innerText="invalid name";
			error.style.color="orange";
		}
		else if(name1.value.length<3||name2.value.length<3){

			error.style.visibility="visible";
			error.innerText="Name must be minimum 3 character";
			error.style.color="orange";
		}
		else
		{
			
			var vs=Math.ceil(Math.random()*100);
			answer.innerText=vs+"%";
			answer.style.visibility='visible';
			message.innerText=`${name1.value} and ${name2.value} Good Match. `
		}
    return 
	}

  
