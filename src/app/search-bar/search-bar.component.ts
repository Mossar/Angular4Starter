import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBar {

  @Input() searchText: String;
  @Output() searchTextChange = new EventEmitter<String>();

  constructor() {

  }

  updateSearchText() {
    this.searchTextChange.emit(this.searchText);
  }

}
