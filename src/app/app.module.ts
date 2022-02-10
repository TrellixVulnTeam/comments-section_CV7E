import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import { VoteElementComponent } from './vote-element/vote-element.component';
import { ContainerComponent } from './container/container.component';
import { CommentFormComponent } from './comment-form/comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentContainerComponent,
    VoteElementComponent,
    ContainerComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
