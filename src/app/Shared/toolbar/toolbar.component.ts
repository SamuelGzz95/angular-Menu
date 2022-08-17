import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from 'src/app/Shared/sidenav/sidenav.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor() {}
  @ViewChild('sidenav') sidenav: SidenavComponent;

  ngOnInit(): void {}

  SidenavT() {
    this.sidenav.Toogle();
  }
}
