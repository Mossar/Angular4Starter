import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "tags-filter",
  templateUrl: "./tags-filter.component.html",
  styleUrls: ['./tags-filter.component.scss']
})
export class TagsFilter {

  @Input() searchTag: string;
  @Output() searchTagChange = new EventEmitter<string>();
  tags: Array<string> = [];

  constructor(private http: Http) {
    this.http.get("../../assets/tags.json")
        .map( response => response.json() )
        .subscribe( data => this.tags = data )
  }

  onClicked(tag) {
    this.searchTag = tag;
    this.searchTagChange.emit(this.searchTag);
  }

}
