import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MyAngularElementModule } from './my-angular-element/my-angular-element.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NormalAngularComponent } from './normal-angular-component/normal-angular-component.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MyAngularElementModule,
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
