import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimelinesComponent} from "./component/timelines/timelines.component";
import {YoutubePlaylistComponent} from "./component/youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./component/youtube-player/youtube-player.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {DictionaryPageComponent} from "./component/dictionary-page/dictionary-page.component";
import {DictionaryDetailComponent} from "./component/dictionary-detail/dictionary-detail.component";

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
    component: ProductListComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
