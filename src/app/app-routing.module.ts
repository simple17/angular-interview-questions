import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TsOneComponent } from './components/ts-one/ts-one.component';
import { TsTwoComponent } from './components/ts-two/ts-two.component';
import { AngularOneComponent } from './components/angular-one/angular-one.component';
import { AngularTwoComponent } from './components/angular-two/angular-two.component';
import { AngularThreeComponent } from './components/angular-three/angular-three.component';
import { ScssOneComponent } from './components/scss-one/scss-one.component';
import { ScssTwoComponent } from './components/scss-two/scss-two.component';

const routes: Routes = [
  { path: 'ts-1', component: TsOneComponent },
  { path: 'ts-2', component: TsTwoComponent },
  { path: 'angular-1', component: AngularOneComponent },
  { path: 'angular-2', component: AngularTwoComponent },
  { path: 'angular-3', component: AngularThreeComponent },
  { path: 'scss-1', component: ScssOneComponent },
  { path: 'scss-2', component: ScssTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
