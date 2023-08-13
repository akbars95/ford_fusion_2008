import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {PhotosComponent} from "./components/photos/photos.component";
import {VideosComponent} from "./components/videos/videos.component";
import {InfoComponent} from "./components/info/info.component";
import {PriceComponent} from "./components/price/price.component";

const routes: Routes = [
  {path: '', redirectTo: 'photos', pathMatch: 'full'},
  {path: 'photos', component: PhotosComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'info', component: InfoComponent},
  {path: 'price', component: PriceComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}