import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";
import { ModalModule } from "../modal/modal.module";
import { ArticleToBasketComponent } from "./article-to-basket.component";

@NgModule({
  declarations: [ArticleToBasketComponent],
  imports: [SharedModule,ModalModule],
  exports: [ArticleToBasketComponent],
})
export class ArticleToBasketModule {}
