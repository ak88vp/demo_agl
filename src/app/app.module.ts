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
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { DictionaryPageComponent } from './component/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './component/dictionary-detail/dictionary-detail.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import {HttpClientModule} from "@angular/common/http";
import { StatusListComponent } from './component/status-list/status-list.component';
import { StatusCreateComponent } from './component/status-create/status-create.component';
import { StatusEditComponent } from './component/status-edit/status-edit.component';
import { BlogListComponent } from './component/blog-list/blog-list.component';
import { BlogCreateComponent } from './component/blog-create/blog-create.component';
import { BlogEditComponent } from './component/blog-edit/blog-edit.component';

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
    YoutubePlayerComponent,
    ProductListComponent,
    ProductCreateComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    ProductDeleteComponent,
    StatusListComponent,
    StatusCreateComponent,
    StatusEditComponent,
    BlogListComponent,
    BlogCreateComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
