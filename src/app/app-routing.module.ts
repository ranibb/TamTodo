import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { TodoComponent } from './todo/todo.component';
import { MemberComponent } from "./member/member.component";
import { PaymentAndBillingComponent } from "./payment-and-billing/payment-and-billing.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default path
  { path: 'home', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'member', component: MemberComponent },
  { path: 'payment-and-billing', component: PaymentAndBillingComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
