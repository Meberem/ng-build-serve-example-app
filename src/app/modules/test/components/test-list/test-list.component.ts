import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TestPopupComponent } from "../test-popup/test-popup.component";

@Component({
  selector: "app-test-list",
  templateUrl: "./test-list.component.html",
  styleUrls: ["./test-list.component.scss"]
})
export class TestListComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  openModal() {
    this.modalService
      .open(TestPopupComponent, { size: "lg", centered: true })
      .result.then(
        () => this.ngOnInit(),
        reason => console.log("dismissed with ", reason)
      );
  }

  ngOnInit() {}
}
