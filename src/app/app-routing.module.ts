import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  { path: "", redirectTo: "posts", pathMatch: "full" },
  { path: "posts", component: PostComponent },
  { path: "posts/:userId", component: PostComponent },
  { path: "customers", component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
