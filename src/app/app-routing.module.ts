import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { ExperienceComponent } from './components/experience/experience.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  {
    path: 'project',
    children: [
      { path: '', redirectTo: 'groupWare', pathMatch: 'full' }, // 'project'만 입력하면 'groupWare'로 리디렉션
      { path: ':id', component: ProjectComponent }, // 동적 경로 처리
    ]
  }
  // { path: 'project', redirectTo: 'project/groupWare', pathMatch: 'full' },
  // { path: 'project/:id', component: ProjectComponent },
  // { path: '**', component: PageNotFoundComponent },

  // {path: 'hero/:id', component: HeroDetailComponent},
  // {
  //   path: 'first-component',
  //   title: 'First component',
  //   component: FirstComponent,  // this is the component with the <router-outlet> in the template
  //   children: [
  //     {
  //       path: 'child-a',  // child route path
  //       title: resolvedChildATitle,
  //       component: ChildAComponent,  // child route component that the router renders
  //     },
  //   ],
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
