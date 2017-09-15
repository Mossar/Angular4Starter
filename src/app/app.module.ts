import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

/* COMPONENTS */
import { App } from './app.component';
import { SearchBar } from './search-bar/search-bar.component';
import { ProgrammersList } from './programmers-list/programmers-list.component';
import { TagsFilter } from './tags-filter/tags-filter.component';
import { ExampleComponentComponent } from './src/app/example-component/example-component.component';

@NgModule({
  declarations: [
    App,
    SearchBar,
    ProgrammersList,
    TagsFilter,
    ExampleComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
