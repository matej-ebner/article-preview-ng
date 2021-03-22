import { Component } from "@angular/core";

@Component({
  selector: "ap-article-to-basket",
  templateUrl: "./article-to-basket.component.html",
  styleUrls: ["./article-to-basket.component.scss"],
})
export class ArticleToBasketComponent {
  confirmArticleToBasket: boolean;

  constructor() {}

  toBasketConfirmed(confirmed: boolean): void {
    if (confirmed) {
      // logic for saving the article to basket
    } else {
      this.confirmArticleToBasket = false;
    }
  }
}
