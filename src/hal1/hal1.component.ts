import { Component, OnInit } from "@angular/core";
import { GlobalService } from "../global.service";

@Component({
  selector: "app-hal1",
  templateUrl: "./hal1.component.html",
  styleUrls: ["./hal1.component.css"]
})
export class Hal1Component implements OnInit {
  judul: String;
  isi: String;
  date: Date;
  temp: String;
  constructor(public global: GlobalService) {}
  ngOnInit() {}
  add() {
    this.temp = this.date.toString();
    this.global.addnote(this.judul, this.isi, this.temp);
    this.judul = "";
    this.isi = "";
    alert("sukses");
  }
}
