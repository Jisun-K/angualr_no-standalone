import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
      contents: '여러가지의 메모, 기록할 수 있는 다이어리 웹 앱(Blank) 서비스 입니다.',
      page: ''
    },
    {
      id: 'diary',
      name: '그림일기장',
      image: 'assets/images/project_diary.PNG',
      contents: 'Blank의 복잡성을 줄여 최소한의 기능으로 일별로 작성하는 그림일기 서비스입니다.',
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
    private activeRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(param => {
      this.currId = param['id'] || 'blank';
    });
  }
}
