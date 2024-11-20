import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  animations: [
    trigger('toggleView', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(50px)',
        visibility: 'hidden'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)',
        visibility: 'visible'
      })),
      transition('hidden <=> visible', [
        animate('0.5s ease-in-out')
      ])
    ])
  ],
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  // 스크롤 이벤트
  public isAtBottom = false;
  public isAtTop = false;
  public isScroll = false;

  public isShowMe: boolean = false;
  public experienceList: any = {
    work: [
      {
        date: '2022.04 ~ 2022.08',
        companyName: '주식회사 와이엠씨',
        project: [
          {
            id: '',
            name: "전동 킥보드 서비스 앱 개발 진행",
            contents: '정부 과제로 전동 킥보드 서비스 앱 개발에 중간 투입되어, navigation bar, main 에 사용되는 기본 기능 등 개발에 참여하였습니다.',
          }
        ],
        result: '중간에 내부 사정으로 본 소속으로 돌아가 마무리는 함께하지 못했지만, react-native를 사용하는 경험을 할 수 있었고, 어떤 식으로 프로젝트가 진행되는지 알 수 있었습니다.'
      },
      {
        date: '2022.08 ~ 2024.06',
        companyName: '주식회사 크레페스튜디오',
        project: [
          {
            id: '',
            name: '외주 웹 개발',
            contents: 'angular를 이용한 첫 프로젝트였습니다. ',
          },
          {
            id: 'rolling',
            name: '굿 노트에서 사용하는 속지, 스티커를 판매, 구입할 수 있는 서비스( 자사 웹 )',
            contents: '',
            page: ''
          },
          {
            id: 'blank',
            name: '여러가지의 메모, 기록할 수 있는 다이어리 웹/앱(Blank)',
            contents: '',
            page: ''
          },
          {
            id: 'diary',
            name: 'Blank를 축소시켜 간소화한 다이어리 앱(그림일기장)',
            contents: '',
            page: ''
          },
          {
            id: 'calendar',
            name: '그림으로 월 달력을 기록하는 다이어리 앱(그림달력)',
            contents: '',
            page: ''
          },
        ],
      }
    ],
    study: [
      {
        date: '2020.09 ~ 2021.02',
        companyName: '',
        title: '[2020과정평가형]정보처리산업기사(파이썬, C언어, 자바, Java, 앱프로그래밍)',
        project: [
          {
            id: 'groupWare',
            name: '그룹웨어 프로젝트',
            contents: 'java, jsp를 이용하여 웹으로 구현한 팀프로젝트 입니다. 다른 팀들과는 차별점을 두며 여러가지 기능을 구현해보고 싶던 저는 회사를 다녔던 경험을 바탕으로 그룹웨어라는 주제를 선정하였습니다. 팀 프로젝트를 하며 팀원들과의 소통, 프로젝트 시작 전 계획의 중요성을 느낄 수 있었으며 갈등 혹은 문제에 대한 해결 방법의 중요성도 깨닫게 되었습니다.',
          }
        ],
        result: '정보처리산업기사 자격증 취득(2022.02)'
      },
      {
        date: '2024.06 ~ ',
        companyName: '',
        title: '정보처리기사 자격증',
        project: [
          {
            id: '',
            name: '',
            contents: '',
          }
        ],
        result: '정보처리기사 필기 합격(2024.08)'
      }
    ]
  };

  @HostListener('wheel', ['$event'])
  onMouseScroll(event: WheelEvent) {
    if (this.isScroll) {
      event.stopPropagation();
    }
  }

  // onScroll(event: Event): void {
  //   const target = event.target as HTMLElement;
  //   const scrollTop = target.scrollTop;
  //   const scrollHeight = target.scrollHeight;
  //   const clientHeight = target.clientHeight;

  //   // 끝 감지
  //   this.isAtBottom = scrollTop + clientHeight >= scrollHeight;
  //   this.isAtTop = scrollTop === 0;

  //   console.log('onScroll ===============<', target, scrollTop, scrollHeight, clientHeight);
  // }

  ngAfterViewInit(): void {
    const element = this.scrollContainer.nativeElement;

    if (element.scrollHeight > element.clientHeight) {
      console.log('스크롤이 생겼습니다.');
    } else {
      console.log('스크롤이 없습니다.');
    }
  }

  constructor() {
    setTimeout(() => {
      this.isShowMe = true;
    }, 300);
  }
}
