import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public pageList = [
    {
      name: "home",
      path: "home"
    },
    {
      name: "experience",
      path: "experience",
    },
    {
      name: "project/groupWare",
      path: "project",
    }
  ];

  constructor(
    private router: Router
  ) {

  }
  //  router 와 같은 이름의 객체를 갖지고 있는 배열 선언
  // 전체적인 스크롤 이벤트를 받아 아래, 위에 맞는 routerLink 보내기 
  @HostListener('wheel', ['$event'])
  onMouseScroll(event: WheelEvent) {

    let currPage = this.getCurrPage();
    let currentIndex = this.pageList.findIndex(page => page.path === currPage);

    if (event.deltaY > 0) {
      console.log("onMouseScroll ===========>", currPage, currentIndex, this.pageList.length);

      // 아래로 스크롤 시
      if (currentIndex < this.pageList.length - 1) {
        this.router.navigate([this.pageList[currentIndex + 1].name]);
      }
    } else {
      console.log("onMouseScroll ===========>", currPage, currentIndex, this.pageList.length);
      // 위로 스크롤 시
      if (currentIndex > 0) {
        this.router.navigate([this.pageList[currentIndex - 1].name]);
      }
    }
  }

  getCurrPage() {
    let url = window.location.href;
    return url.split('/')[3];
    // return url.split('/')[4];
  }
}
