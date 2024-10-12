import { Component, HostListener } from '@angular/core';
import { Route } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public isShowMe: boolean = false;
  public siteList: Array<any> = [
    {
      name: 'github',
      img: 'assets/images/ic_github.svg',
      url: 'https://github.com/Jisun-K'
    },
    {
      name: 'notion',
      img: 'assets/images/ic_notion.svg',
      url: 'https://continuous-macrame-1a0.notion.site/Jisun-Kim-32d3432a874748b082494e6be8b6047a'
    },
  ];

  @HostListener('wheel', ['$event'])
  onMouseScroll(event: WheelEvent) {
    this.isShowMe = event.deltaY > 0 ? true : false;
    // this.currView = this.viewList[1].path;
    // this.router.navigate([this.currView]);
  }


  // onClickMe() {
  //   this.isShowMe = true;
  //   console.log("honeComponent onClickMe() isShowMe ======>", this.isShowMe);
  // }
}
