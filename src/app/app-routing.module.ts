import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavigationRoutes } from "src/app/app-navigation-constants";

const routes: Routes = [
  {
    path: NavigationRoutes.ARTICLE_PREVIEW,
    loadChildren: () =>
      import("./pages/article-preview-container/article-preview-container.module").then(
        (m) => m.ArticlePreviewModule
      ),
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
      scrollPositionRestoration: "disabled",
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
