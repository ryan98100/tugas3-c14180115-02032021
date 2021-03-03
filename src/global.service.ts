import { Injectable } from "@angular/core";

@Injectable()
export class GlobalService {
  private note = [{ judul: "", isi: "", date: "", fav: "" }];
  constructor() {}
  addnote(judule, isie, datee) {
    this.note.push({
      judul: judule,
      isi: isie,
      date: datee,
      fav: ""
    });
  }

  getdata() {
    return this.note;
  }

  addfav(pos) {
    this.note[pos].fav = "1";
  }
}
