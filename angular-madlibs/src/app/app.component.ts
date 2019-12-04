import { Component } from '@angular/core';
import { staticViewQueryIds } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-madlibs';

  holiday: string;
  place: string;
  animal: string;
  noun: string;
  celebrity: string;
  display: boolean = false;

  save() {
    if(this.holiday && this.place
      && this.animal && this.noun && this.celebrity) {
        this.display = true; 
      } else {
        alert("Fill out the form completely before continuing")
      }
  }
  reset() {
    this.holiday = '';
    this.place = '';
    this.animal = '';
    this.noun = '';
    this.celebrity = '';
    this.display = false;
  }

}

