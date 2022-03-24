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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
