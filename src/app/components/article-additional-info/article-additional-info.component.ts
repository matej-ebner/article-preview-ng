import { Component, Input } from "@angular/core";
import { ArticleAdditionalInfoDTO } from "src/app/interfaces/article-dto.interface";

@Component({
  selector: "ap-article-additional-info",
  templateUrl: "./article-additional-info.component.html",
  styleUrls: ["./article-additional-info.component.scss"],
})
export class ArticleAdditionalInfoComponent {
  @Input() additionalInfoSet: ArticleAdditionalInfoDTO[];

  constructor() {}
}
