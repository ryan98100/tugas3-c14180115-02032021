import { Component, OnInit } from "@angular/core";
import { GlobalService } from "../global.service";

@Component({
  selector: "app-hal2",
  templateUrl: "./hal2.component.html",
  styleUrls: ["./hal2.component.css"]
})
export class Hal2Component implements OnInit {
  note;
  constructor(private global: GlobalService) {
    this.note = this.global.getdata();
  }

  ngOnInit() {}
  fav(x) {
    this.global.addfav(x);
    alert("sukses");
  }
}
