import { Component, Input } from "@angular/core";

@Component({
  selector: "ap-article-description",
  templateUrl: "./article-description.component.html",
  styleUrls: ["./article-description.component.scss"],
})
export class ArticleDescriptionComponent {
  @Input() name: string;
  @Input() shortDescription: string;

  constructor() {}
}
