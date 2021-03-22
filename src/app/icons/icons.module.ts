import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconCloseComponent } from "./icon-close/icon-close.component";
import { IconNextComponent } from "./icon-next/icon-next.component";
import { IconPreviousComponent } from "./icon-previous/icon-previous.component";

@NgModule({
  declarations: [IconCloseComponent,IconNextComponent,IconPreviousComponent],
  exports: [IconCloseComponent,IconNextComponent,IconPreviousComponent],
  imports: [CommonModule],
})
export class IconsModule {}
