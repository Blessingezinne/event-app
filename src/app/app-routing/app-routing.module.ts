import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, Router, RouterModule, Routes} from "@angular/router";

const routes: Routes = [];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
