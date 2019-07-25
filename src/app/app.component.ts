import { Component, OnInit, OnDestroy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(["en", "ro"]);
    this.translate.setDefaultLang("en");
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
