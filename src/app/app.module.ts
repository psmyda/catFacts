import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';

import {ButtonModule} from "primeng/button";
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {fakeAuthProvider} from "./_helpers/fakeAuth";
import {ToolbarModule} from "primeng/toolbar";
import {RippleModule} from "primeng/ripple";
import {FieldsetModule} from "primeng/fieldset";
import {SkeletonModule} from "primeng/skeleton";
import { ToastModule } from 'primeng/toast';
import {ScrollTrackerDirective} from "./_helpers/scrollTracker.directive";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ScrollTrackerDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    InputTextModule,
    ReactiveFormsModule,
    ToolbarModule,
    RippleModule,
    FieldsetModule,
    SkeletonModule,
    ToastModule
  ],
  providers: [
    fakeAuthProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
