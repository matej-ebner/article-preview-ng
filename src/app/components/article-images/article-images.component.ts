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
  }

  setCarouselImages(): void {
    this.caroseulImages = this.images.slice(0, 4);
  }

  nextImage() {
    const lastImage = this.caroseulImages[3];
    const index = this.images.findIndex(
      (image) => image.path === lastImage.path
    );
    const nextImageIndex = index < 5 ? index + 1 : 0;

    const newImageSet: ArticleImageDTO[] = [];
    newImageSet.push(...this.caroseulImages.splice(1, 3));
    newImageSet.push(this.images[nextImageIndex]);

    const removedImage = this.caroseulImages.shift();

    if (removedImage.path === this.headerImage.path) {
      const removedImageIndex = this.images.findIndex(
        (image) => image.path === removedImage.path
      );
      this.headerImage =
        removedImageIndex < 5
          ? this.images[removedImageIndex + 1]
          : this.images[0];
    }

    this.caroseulImages = newImageSet;
  }

  previousImage() {
    const firstImage = this.caroseulImages[0];
    const index = this.images.findIndex(
      (image) => image.path === firstImage.path
    );
    const nextImageIndex = index > 0 ? index - 1 : 5;

    const newImageSet: ArticleImageDTO[] = [];
    newImageSet.push(this.images[nextImageIndex]);
    newImageSet.push(...this.caroseulImages.splice(0, 3));

    const removedImage = this.caroseulImages.pop();

    if (removedImage.path === this.headerImage.path) {
      const removedImageIndex = this.images.findIndex(
        (image) => image.path === removedImage.path
      );
      this.headerImage =
        removedImageIndex > 0
          ? this.images[removedImageIndex - 1]
          : this.images[5];
    }

    this.caroseulImages = newImageSet;
  }
}
