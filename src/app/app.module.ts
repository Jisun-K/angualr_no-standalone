import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectComponent } from './components/project/project.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    ProjectComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule
    // RouterModule.forRoot([])
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
