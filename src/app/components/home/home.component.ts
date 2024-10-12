import { Component } from '@angular/core';
import { Route } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public isShowMe: boolean = false;

  onClickMe() {
    this.isShowMe = true;
    console.log("honeComponent onClickMe() isShowMe ======>", this.isShowMe);
  }
}
