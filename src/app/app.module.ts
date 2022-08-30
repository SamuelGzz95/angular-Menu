import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './Shared/toolbar/toolbar.component';
import { SidenavComponent } from './Shared/sidenav/sidenav.component';
import { MenuComponent } from './Shared/menu/menu.component';
import { TableComponent } from './Shared/table/table.component';
import { InfoCardComponent } from './Shared/info-card/info-card.component';
import { ListInfoCardComponent } from './Shared/info-card/list-info-card/list-info-card.component';

@NgModule({
  declarations: [ToolbarComponent, SidenavComponent, MenuComponent, TableComponent, InfoCardComponent, ListInfoCardComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [ToolbarComponent],
})
export class AppModule {}
