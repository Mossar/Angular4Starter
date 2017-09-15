import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map';

/* COMPONENTS */
import { App } from './app.component';
import { Dashboard } from './dashboard/dashboard.component';
import { SearchList } from './search-list/search-list.component';
import { ProgrammerInfo } from './programmer-info/programmer-info.component';

import { SearchBar } from './search-list/search-bar/search-bar.component';
import { ProgrammersList } from './search-list/programmers-list/programmers-list.component';
import { TagsFilter } from './search-list/tags-filter/tags-filter.component';

/* ROUTES */
const appRoutes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'programmer/:name',      component: ProgrammerInfo },
  {
    path: 'search',
    component: SearchList,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    App,
    Dashboard,
    SearchList,
    ProgrammerInfo,
    SearchBar,
    ProgrammersList,
    TagsFilter
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
