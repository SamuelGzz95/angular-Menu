import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialExampleModule } from '../../material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MenuComponent } from './components/menu/menu.component';
import { TableComponent } from './components/table/table.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { ListInfoCardComponent } from './components/info-card/list-info-card/list-info-card.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    MenuComponent,
    TableComponent,
    InfoCardComponent,
    ListInfoCardComponent,
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent,
    MenuComponent,
    TableComponent,
    InfoCardComponent,
    ListInfoCardComponent,
  ],
  imports: [CommonModule, MaterialExampleModule],
  providers: [ToolbarComponent],
})
export class SharedModule {}
