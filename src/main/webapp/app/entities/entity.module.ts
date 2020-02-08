import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.JhipsterZadanieStudentModule)
      },
      {
        path: 'interest',
        loadChildren: () => import('./interest/interest.module').then(m => m.JhipsterZadanieInterestModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class JhipsterZadanieEntityModule {}
