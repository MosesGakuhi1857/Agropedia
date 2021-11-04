import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchPlantComponent } from './search-plant/search-plant.component';

const routes: Routes = [
  { path:'', component: HomepageComponent },
  { path: 'search-plant',component:SearchPlantComponent},
  {path : 'homepage', component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
