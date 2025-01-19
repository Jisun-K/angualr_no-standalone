import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public isShowMe: boolean = false; // 소개글을 보여주냐
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

  constructor(
    private router: Router
  ) {

  }


  // 데스크탑
  @HostListener('wheel', ['$event'])
  onMouseScroll(event: WheelEvent) {
    event.stopPropagation(); // 이벤트를 막음. 
    if (event.deltaY > 0) {
      if (this.isShowMe) {
        this.startTransition(true, true);
      } else {
        this.startTransition(true);
      }
    } else {
      this.startTransition(false);
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    if (this.isShowMe) {
      this.startTransition(true, true);
    } else {
      this.startTransition(true);
    }
  }

  startTransition(showSecondView: boolean, navigatePage: boolean = false) {
    this.isShowMe = showSecondView;
    if (navigatePage) {
      this.router.navigate(['experience']);
    }
  }

  // onClickMe() {
  //   this.isShowMe = true;
  //   console.log("honeComponent onClickMe() isShowMe ======>", this.isShowMe);
  // }
}
