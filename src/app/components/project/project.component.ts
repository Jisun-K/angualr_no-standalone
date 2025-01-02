import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  public currId: string = '';

  public items: Array<any> = [

    {
      id: 'groupWare',
      name: '그룹웨어 프로젝트',
      image: 'assets/images/project_gw2.PNG',
      contents: 'java, jsp를 이용하여 웹으로 구현한 팀프로젝트 입니다. 다른 팀들과는 차별점을 두며 여러가지 기능을 구현해보고 싶던 저는 회사를 다녔던 경험을 바탕으로 그룹웨어라는 주제를 선정하였습니다. 팀 프로젝트를 하며 팀원들과의 소통, 프로젝트 시작 전 계획의 중요성을 느낄 수 있었으며 갈등 혹은 문제에 대한 해결 방법의 중요성도 깨닫게 되었습니다.',
    },
    {
      id: 'blank',
      name: 'BLANK',
      image: 'assets/images/project_blank.PNG',
      contents: ' 다양한 형태로 일상을 기록할 수 있는 서비스입니다. 사용자들이 필요한 스티커와 템플릿 등을 직접 제작 사용뿐만 아닌 판매할 수 있는 기능이 있습니다. 이를 통해 사용자들이 개인적인 일상이나 기록을 다양하게 표현하여 작성할 수 있습니다.<br> PWA 기술을 활용하여 데스크톱 앱으로 다운로드하여 사용할 수 있도록 지원하며, SwiftUI의 WebView를 통해 네이티브 앱으로도 출시되었습니다.<br> 또한, Firebase를 백엔드로 사용하여 실시간 데이터 저장 및 관리를 구현하였습니다. 기존의 CSS 프레임워크나 라이브러리(예: Material UI)는 사용하지 않고, 모든 UI 요소를 직접 구현하여 독창적이고 커스터마이즈된 디자인을 구현했습니다.',
      page: ''

    },
    {
      id: 'diary',
      name: '그림일기장',
      image: 'assets/images/project_diary.PNG',
      contents: '기획과 디자인을 처음 맡아서 진행한 프로젝트로, Blank 복잡성과 같은 문제를 해결하기 위해 만든그림일기 서비스입니다. Blank 프로젝트의 코드를 그대로 사용하되, config.json 파일을 만들어 설정만 다르게 하여 빌드하고, config의 id에 따라 기능과 코드에 차이를 두어 유연한 개발 환경을 마련했습니다. 이 과정에서 사용자 경험을 단순화하고 직관적인 디자인을 통해 보다 사용자 친화적인 서비스를 제공할 수 있었습니다.',
      page: ''
    },
    {
      id: 'calendar',
      name: '그림달력',
      image: 'assets/images/project_calendar.PNG',
      contents: '그림일기장과 같은 시리즈로 달력을 그림으로 기록하는 그림달력 서비스입니다.',
      page: ''
    }
  ];

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  onMouseScroll(event: WheelEvent) {

    if (event.deltaY < 0) {

      // 위로 스크롤 시
      this.router.navigate(['experience']);
    }
  }


  ngOnInit(): void {
    register();

    const swiperContainer = document.querySelector('swiper-container') as HTMLElement;

    this.activeRoute.params.subscribe(param => {
      this.currId = param['id'];
      let slideIndex = this.items.findIndex(item => item.id == this.currId);
      if (slideIndex !== -1) {
        (swiperContainer as any).swiper.slideTo(slideIndex);
      }
    });


  }
}
