import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NameTitlePipe } from './name-title.pipe';
import { DemoDirective } from './demo.directive';
import { Demo1Directive } from './demo1.directive';
import { StructuredemoDirective } from './structuredemo.directive';
import { AboutComponent } from './about/about.component';
import { VissionComponent } from './about/vission/vission.component';
import { MissionComponent } from './about/mission/mission.component';
import { FeacturesComponent } from './feactures/feactures.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NameTitlePipe,
    DemoDirective,
    Demo1Directive,
    StructuredemoDirective,
    AboutComponent,
    VissionComponent,
    MissionComponent,
    FeacturesComponent,
    GalleryComponent,
    HeaderComponent,
    ReactiveFormComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
