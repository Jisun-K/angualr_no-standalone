import { Component } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  public items: Array<any> = [
    {
      title: '관심 갖게된 계기, 목표(수정)'
    },
    {
      title: '프로젝트의 역할, 기여도, 갈등상황 및 해결 노력(수정)'
    },
  ];
}
