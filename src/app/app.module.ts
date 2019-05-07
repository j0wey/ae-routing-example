import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NormalAngularComponent } from './normal-angular-component/normal-angular-component.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: '/app/component' },
        { path: 'app/component', component: NormalAngularComponent }

      ]
    )
  ],
  declarations: [AppComponent, HelloComponent, NormalAngularComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
