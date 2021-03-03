import { Injectable } from "@angular/core";

@Injectable()
export class GlobalService {
  private note = [{ judul: "0", isi: "0", date: "0", fav: "0" }];
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
