import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AeChildAComponent } from './ae-child-a/ae-child-a.component';
import { AeChildBComponent } from './ae-child-b/ae-child-b.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        { path: 'to-ae/ae-child-a', component: AeChildAComponent  },
        { path: 'to-ae/ae-child-a/ae-child-b', component: AeChildBComponent  }

      ]
    )
  ],
  declarations: [
    AeChildAComponent,
    AeChildBComponent
  ]
})
export class MyAngularElementModule { }