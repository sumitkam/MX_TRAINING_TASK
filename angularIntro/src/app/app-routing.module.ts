import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './about/mission/mission.component';
import { VissionComponent } from './about/vission/vission.component';
import { ContactComponent } from './contact/contact.component';
import { FeacturesComponent } from './feactures/feactures.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:"home",component:HomeComponent},
  {path:'about',component:AboutComponent,children:[
    {path:'vission',component:VissionComponent},
    {path:'mission',component:MissionComponent},
  ]},
  {path:'fecture',component:FeacturesComponent},
  {path:'gall',component:GalleryComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
