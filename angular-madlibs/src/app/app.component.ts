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

  save() {
    console.log(this.holiday && this.place 
      && this.animal && this.noun && this.celebrity);
  }
  reset() {
    this.holiday = '';
    this.place = '';
    this.animal = '';
    this.noun = '';
    this.celebrity = '';
  }

}

