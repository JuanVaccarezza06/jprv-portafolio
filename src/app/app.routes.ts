import { Routes } from '@angular/router';
import { ProjectsSectionComponent } from './components/app-component/projects-section-component';

export const routes: Routes = [
  {
    path: '', component: ProjectsSectionComponent 
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full', 
  },
];
