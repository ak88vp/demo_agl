import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoAglComponent } from './component/demo-agl/demo-agl.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PetComponent } from './component/pet/pet.component';
import { ProductComponent } from './component/product/product.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { ColorComponent } from './component/color/color.component';
import { ArticleComponent } from './component/article/article.component';
import { LikeComponent } from './component/like/like.component';
import { NameCardComponent } from './component/name-card/name-card.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { RatingBarComponentComponent } from './component/rating-bar-component/rating-bar-component.component';
import { CountdownTimerComponent } from './component/countdown-timer/countdown-timer.component';
import { BirthdayComponent } from './component/birthday/birthday.component';
import { TodoComponent } from './component/todo/todo.component';
import { ValidatorsComponent } from './component/validators/validators.component';
import {MyserviceService} from "./service/myservice.service";
import { TestServiceComponent } from './component/test-service/test-service.component';
import { TimelinesComponent } from './component/timelines/timelines.component';
import { YoutubePlaylistComponent } from './component/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './component/youtube-player/youtube-player.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoAglComponent,
    PetComponent,
    ProductComponent,
    CalculatorComponent,
    ColorComponent,
    ArticleComponent,
    LikeComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponentComponent,
    CountdownTimerComponent,
    BirthdayComponent,
    TodoComponent,
    ValidatorsComponent,
    TestServiceComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
