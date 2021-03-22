import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";
import { ArticleDescriptionComponent } from "./article-description.component";

@NgModule({
  declarations: [ArticleDescriptionComponent],
  imports: [SharedModule],
  exports: [ArticleDescriptionComponent],
})
export class ArticleDescriptionModule {}
