import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Http } from "@angular/http";
import { Programmer } from "../../shared/programmer.interface";


@Component({
  selector: "programmer-info",
  templateUrl: "./programmer-info.component.html",
  styleUrls: ['./programmer-info.component.scss']
})
export class ProgrammerInfo {

  programmer: Programmer;

  constructor(private route: ActivatedRoute, private http: Http) {
    this.route.params.subscribe(params => {
      this.http.get("../../assets/programmers.json")
          .map( response => response.json() )
          .subscribe( data => {
            this.setProgrammer(params.name, data);
          } )
    });
  }

  setProgrammer(name, programmers) {
    this.programmer = programmers.filter( programmer => {
      return programmer.name == name;
    } )[0];
  }

}
