import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @ViewChild('drawer') drawer: MatDrawer;

  dataSource: any[] = [
    { position: {type:"info",info:1}, name: {type:"info",info:'Hydrogen'}, weight: {type:"info",info:1.0079}, symbol:{type:"info",info:'H'}, icon:{type:"icon", icon:"delete"} },
    { position: {type:"info",info:1}, name: {type:"info",info:'Hydrogen'}, weight: {type:"info",info:1.0079}, symbol:{type:"info",info:'H'}, icon:{type:"icon", icon:"delete"} },
    { position: {type:"info",info:1}, name: {type:"info",info:'Hydrogen'}, weight: {type:"info",info:1.0079}, symbol:{type:"info",info:'H'}, icon:{type:"icon", icon:"delete"} },
    { position: {type:"info",info:1}, name: {type:"info",info:'Hydrogen'}, weight: {type:"info",info:1.0079}, symbol:{type:"info",info:'H'}, icon:{type:"icon", icon:"delete"} },
    { position: {type:"info",info:1}, name: {type:"info",info:'Hydrogen'}, weight: {type:"info",info:1.0079}, symbol:{type:"info",info:'H'}, icon:{type:"icon", icon:"delete"} },
    { position: {type:"info",info:1}, name: {type:"info",info:'Hydrogen'}, weight: {type:"info",info:1.0079}, symbol:{type:"info",info:'H'}, icon:{type:"icon", icon:"delete"} },
    { position: {type:"info",info:1}, name: {type:"info",info:'Hydrogen'}, weight: {type:"info",info:1.0079}, symbol:{type:"info",info:'H'}, icon:{type:"icon", icon:"delete"} },
    { position: {type:"info",info:1}, name: {type:"info",info:'Hydrogen'}, weight: {type:"info",info:1.0079}, symbol:{type:"info",info:'H'}, icon:{type:"icon", icon:"delete"} },
    // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  objColumns: any[] = [
    {
      name: 'position',
      view: 'Position',
    },
    {
      name: 'name',
      view: 'Name',
    },
    {
      name: 'weight',
      view: 'Weight',
    },
    {
      name: 'symbol',
      view: 'Symbol',
    },
    {
      name: 'icon',
      view: 'icon',
    },
  ];

  Toogle() {
    this.drawer.toggle();
  }
}
