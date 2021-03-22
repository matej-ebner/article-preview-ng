import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";
import { ArticleAdditionalInfoComponent } from "./article-additional-info.component";

@NgModule({
  declarations: [ArticleAdditionalInfoComponent],
  imports: [SharedModule],
  exports: [ArticleAdditionalInfoComponent],
})
export class ArticleAdditionalInfoModule {}
