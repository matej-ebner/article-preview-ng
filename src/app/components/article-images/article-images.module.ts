import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";
import { ArticleImagesComponent } from "./article-images.component";

@NgModule({
  declarations: [ArticleImagesComponent],
  imports: [SharedModule],
  exports: [ArticleImagesComponent],
})
export class ArticleImagesModule {}
