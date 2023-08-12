import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsdinrPipe } from './shared/usdinr.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ExampleService } from './service/example.service';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [AppComponent, ChildComponent, NotfoundComponent, UsdinrPipe, SignupComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ExampleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
