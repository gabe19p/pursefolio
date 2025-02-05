import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EarthComponent } from './earth/earth.component';
import { PinDialogComponent } from './pin-dialog/pin-dialog.component';
import { EducationComponent } from './education/education.component';

export const routes: Routes = [
  { path: 'earth', component: EarthComponent },
  { path: '', redirectTo: '/earth', pathMatch: 'full' },
  { path: 'education', component: EducationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Make sure this is imported in your module
  exports: [RouterModule],
})
export class AppRoutingModule {}
