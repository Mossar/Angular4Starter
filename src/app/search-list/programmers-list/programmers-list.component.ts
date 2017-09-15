import { Component, Input } from "@angular/core";
import { Http } from "@angular/http";
import { Programmer } from "../../../shared/programmer.interface";

@Component({
  selector: "programmers-list",
  templateUrl: "./programmers-list.component.html",
  styleUrls: ["./programmers-list.component.scss"]
})
export class ProgrammersList {

  @Input() searchText: string;
  @Input() searchTag: string;
  programmers: Array<Programmer> = [];

  constructor(private http: Http) {
    this.http.get("../../assets/programmers.json")
        .map( response => response.json() )
        .subscribe( data => this.programmers = data )
  }

  isTagInTags(tags): boolean {
    return !this.searchTag || tags.indexOf(this.searchTag) > -1;
  }

  isTextInProgrammerName(name): boolean {
    return name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
  }

  displaySearchedProgrammers(): Array<Programmer> {
    return this.programmers.filter( programmer => {
      return this.isTagInTags(programmer.tags) && this.isTextInProgrammerName(programmer.name);
    })
  }
}
