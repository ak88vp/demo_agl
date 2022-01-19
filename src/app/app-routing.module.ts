import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimelinesComponent} from "./component/timelines/timelines.component";
import {YoutubePlaylistComponent} from "./component/youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./component/youtube-player/youtube-player.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {DictionaryPageComponent} from "./component/dictionary-page/dictionary-page.component";
import {DictionaryDetailComponent} from "./component/dictionary-detail/dictionary-detail.component";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";
import {StatusListComponent} from "./component/status-list/status-list.component";
import {StatusEditComponent} from "./component/status-edit/status-edit.component";
import {StatusCreateComponent} from "./component/status-create/status-create.component";
import {BlogListComponent} from "./component/blog-list/blog-list.component";
import {BlogCreateComponent} from "./component/blog-create/blog-create.component";
import {BlogEditComponent} from "./component/blog-edit/blog-edit.component";

const routes: Routes = [{
  path: 'timelines',
  component: TimelinesComponent

},{
  path: 'youtube',
  component: YoutubePlaylistComponent,
  children: [{
    path: ':id',
    component: YoutubePlayerComponent
  }]
},
  {
    path: 'products',
    component: ProductListComponent,
    children: [{
      path: ':id',
      component: ProductDeleteComponent
    }]
  },{
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path:'dictionarys',
    component :DictionaryPageComponent
  },{
    path:'dictionarys/:id',
    component :DictionaryDetailComponent
  },
  {
    path:'status',
    component :StatusListComponent
  },{
    path:'status/create',
    component :StatusCreateComponent
  },{
    path:'status/edit/:id',
    component :StatusEditComponent
  },
  {
    path:'blogs',
    component :BlogListComponent
  },{
    path:'blogs/create',
    component :BlogCreateComponent
  },{
    path:'blogs/edit/:id',
    component :BlogEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
