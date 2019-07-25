import { NgModule } from "@angular/core";
import { TestPopupComponent } from "./components/test-popup/test-popup.component";
import { TestListComponent } from "./components/test-list/test-list.component";

@NgModule({
  imports: [],
  declarations: [TestPopupComponent, TestListComponent],
  providers: [],
  entryComponents: [TestListComponent, TestPopupComponent],
  exports: [TestListComponent]
})
export class TestModule {}
