import { Component, OnInit } from "@angular/core";
import {
  ArticleDTO,
  ArticleImageDTO,
} from "src/app/interfaces/article-dto.interface";
import { PageTitleService } from "src/app/services/page-title.service";
import * as Article from "../../../assets/data/article.json";

@Component({
  selector: "ap-article-preview-container",
  templateUrl: "./article-preview-container.component.html",
  styleUrls: ["./article-preview-container.component.scss"],
})
export class ArticlePreviewComponent implements OnInit{
  article: ArticleDTO = Article["default"];
  selectedSize: number;
  articleImages: ArticleImageDTO[] = [];

  constructor(private pageTitleService: PageTitleService) {
    this.pageTitleService.setTitleAddOnString("Article preview");
  }


  ngOnInit(): void {
    this.selectedSize = this.article.sizes[0].value;
    this.filterImagesBySize();
  }

  filterImagesBySize(): void {
    this.articleImages = this.article.images.filter(
      (image: ArticleImageDTO) => {
        return image.size === this.selectedSize;
      }
    );
  }
}
