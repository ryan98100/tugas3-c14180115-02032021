import { Component, OnInit } from "@angular/core";
import { GlobalService } from "../global.service";

@Component({
  selector: "app-hal3",
  templateUrl: "./hal3.component.html",
  styleUrls: ["./hal3.component.css"]
})
export class Hal3Component implements OnInit {
  note;
  constructor(private global: GlobalService) {
    this.note = this.global.getdata();
  }

  ngOnInit() {}
}
