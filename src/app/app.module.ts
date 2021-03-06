import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SwingModule } from 'angular2-swing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { DetailsComponent } from './home/details/details.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileSettingsComponent } from './profile/profile-settings/profile-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    MessagesComponent,
    DetailsComponent,
    ProfileEditComponent,
    ProfileSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    SwingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
