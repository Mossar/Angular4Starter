import { Component } from "@angular/core";

@Component({
  selector: "app",
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss']
})
export class App {

  searchText: String = "";
  searchTag: String = "";

  constructor() {

  }

}
