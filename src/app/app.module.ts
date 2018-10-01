import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatCardModule, MatSelectModule, MatInputModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { MemberComponent } from './member/member.component';
import { PaymentAndBillingComponent } from './payment-and-billing/payment-and-billing.component';
import { SettingsComponent } from './settings/settings.component';
import { TodoFilterAndSearchDialogComponent } from './todo-filter-and-search-dialog/todo-filter-and-search-dialog.component';
import {APP_BASE_HREF} from '@angular/common';
import { CategoryFilterPipe } from './category-filter.pipe';
import { TodoStatusService } from './shared/todo-status.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    TodoComponent,
    MemberComponent,
    PaymentAndBillingComponent,
    SettingsComponent,
    TodoFilterAndSearchDialogComponent,
    CategoryFilterPipe
  ],
  entryComponents: [
    TodoFilterAndSearchDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    AppRoutingModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatDialogModule

  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, TodoStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
