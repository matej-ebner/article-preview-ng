import { Component, Inject, Input } from "@angular/core";

import { ArticleSizeDTO } from "src/app/interfaces/article-dto.interface";
import { ArticlePreviewComponent } from "src/app/pages/article-preview-container/article-preview-container.component";

@Component({
  selector: "ap-article-sizes",
  templateUrl: "./article-sizes.component.html",
  styleUrls: ["./article-sizes.component.scss"],
})
export class ArticleSizesComponent {
  @Input() sizes: ArticleSizeDTO[] = [];

  constructor(
    @Inject(ArticlePreviewComponent)
    private articlePreviewComponent: ArticlePreviewComponent
  ) {}

  selectSize(selectedSizeValue: string): void {
      this.articlePreviewComponent.selectedSize = parseInt(selectedSizeValue);
      this.articlePreviewComponent.filterImagesBySize();
  }
}
