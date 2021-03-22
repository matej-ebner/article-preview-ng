import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleAdditionalInfoModule } from "src/app/components/article-additional-info/article-additional-info.module";
import { ArticleDescriptionModule } from "src/app/components/article-description/article-description.module";
import { ArticleImagesModule } from "src/app/components/article-images/article-images.module";
import { ArticleSizesModule } from "src/app/components/article-sizes/article-sizes.module";
import { ArticleToBasketModule } from "src/app/components/article-to-basket/article-to-basket.module";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";

import { ArticlePreviewComponent } from "./article-preview-container.component";
import { ArticlePreviewContainerService } from "./article-preview-container.service";

const routes: Routes = [{ path: "", component: ArticlePreviewComponent }];

@NgModule({
  declarations: [ArticlePreviewComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ArticleDescriptionModule,
    ArticleSizesModule,
    ArticleToBasketModule,
    ArticleImagesModule,
    ArticleAdditionalInfoModule
  ],
  providers: [ArticlePreviewContainerService],
})
export class ArticlePreviewModule {}
