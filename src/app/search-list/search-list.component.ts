import { Component } from "@angular/core";

@Component({
  selector: "search-list",
  templateUrl: "./search-list.component.html",
  styleUrls: ['./search-list.component.scss']
})
export class SearchList {

  searchText: String = "";
  searchTag: String = "";

  constructor() {

  }

}
