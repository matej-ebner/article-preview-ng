import { Component, Input, OnChanges } from "@angular/core";
import { ArticleImageDTO } from "src/app/interfaces/article-dto.interface";

@Component({
  selector: "ap-article-images",
  templateUrl: "./article-images.component.html",
  styleUrls: ["./article-images.component.scss"],
})
export class ArticleImagesComponent implements OnChanges {
  @Input() images: ArticleImageDTO[];

  headerImage: ArticleImageDTO;
  caroseulImages: ArticleImageDTO[];

  constructor() {}

  ngOnChanges(): void {
    this.headerImage = this.images[0];
    this.setCarouselImages();
    console.log("ArticleImagesComponent");
  }

  setCarouselImages():void{

  }
}
