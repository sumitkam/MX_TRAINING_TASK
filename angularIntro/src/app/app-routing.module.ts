import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './about/mission/mission.component';
import { VissionComponent } from './about/vission/vission.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { FeacturesComponent } from './feactures/feactures.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:"home",component:HomeComponent},
  {path:"form",component:ReactiveFormComponent},
  {path:"user",component:UserComponent},
  {path:"login",component:LoginComponent},
  {path:'about',component:AboutComponent,children:[
    {path:'vission',component:VissionComponent},
    {path:'mission',component:MissionComponent},
  ]},
  {path:'fecture',component:FeacturesComponent},
  {path:'gall',component:GalleryComponent},
  {path:'contact',component:ContactComponent},
  { path: 'firstModule', loadChildren: () => import('./first-module/first-module.module').then(m => m.FirstModuleModule),canActivate :[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
