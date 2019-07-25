import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-test-popup",
  templateUrl: "./test-popup.component.html",
  styleUrls: ["./test-popup.component.scss"]
})
export class TestPopupComponent implements OnInit {
  constructor(private activeModal: NgbActiveModal) {}

  dismiss() {
    this.activeModal.dismiss();
  }

  onSubmit() {}

  ngOnInit() {}
}
