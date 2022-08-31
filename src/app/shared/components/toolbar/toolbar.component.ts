import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from 'src/app/shared/components/sidenav/sidenav.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor() {}
  @ViewChild('sidenav') sidenav: SidenavComponent;
  modeSideNav: string = '';
  ngOnInit(): void {}

  SidenavT() {
    this.sidenav.Toogle();
  }

  SidenavChange(event: any) {
    this.modeSideNav = event.mode;
    console.log('tt', this.modeSideNav);
  }
}
