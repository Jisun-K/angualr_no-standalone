import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public currView: String = "home";
  public viewList = [
    {
      path: "home",
    },
    {
      path: "about",
    },
    // {
    //   path: "home",
    // },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

  }
  //  router 와 같은 이름의 객체를 갖지고 있는 배열 선언
  // 전체적인 스크롤 이벤트를 받아 아래, 위에 맞는 routerLink 보내기 
  // @HostListener('wheel', ['$event'])
  // onMouseScroll(event: WheelEvent) {
  //   this.currView = this.viewList[1].path;
  //   this.router.navigate([this.currView]);
  // }

  // @HostListener('touchmove', ['$event'])
  // onTouchMove(event: TouchEvent) {
  //   console.log('Touch Move', event);
  // }

}
