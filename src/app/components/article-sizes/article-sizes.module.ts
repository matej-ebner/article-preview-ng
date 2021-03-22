import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";
import { ArticleSizesComponent } from "./article-sizes.component";

@NgModule({
  declarations: [ArticleSizesComponent],
  imports: [SharedModule],
  exports: [ArticleSizesComponent],
})
export class ArticleSizesModule {}
