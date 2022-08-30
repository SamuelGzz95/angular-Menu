import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import {
  InfoCard,
  BtnInfo,
  ListContent,
} from 'src/app/Shared/Interface/IInfoCard';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  constructor(private observer: BreakpointObserver) {}
  @ViewChild('drawer') drawer: MatDrawer;
  @Output() public sidenavChange = new EventEmitter<any>();
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.drawer.mode = 'over';
        this.drawer.close();
      } else {
        this.drawer.mode = 'side';
        this.drawer.open();
      }
      this.Mode();
    });
  }
  dataSource: any[] = [
    {
      position: { type: 'info', info: '1' },
      name: { type: 'info', info: 'Hydrogen' },
      weight: { type: 'info', info: 1.0079 },
      symbol: { type: 'info', info: 'H' },
      icon: { type: 'icon', icon: 'delete', tooltip: 'Borrar' },
    },
    {
      position: { type: 'info', info: 1 },
      name: { type: 'info', info: 'Hydrogen' },
      weight: { type: 'info', info: 1.0079 },
      symbol: { type: 'info', info: 'H' },
      icon: { type: 'icon', icon: 'delete', tooltip: 'Borrar' },
    },
    {
      position: { type: 'info', info: 1 },
      name: { type: 'info', info: 'Hydrogen' },
      weight: { type: 'info', info: 1.0079 },
      symbol: { type: 'info', info: 'H' },
      icon: { type: 'icon', icon: 'delete', tooltip: 'Borrar' },
    },
    {
      position: { type: 'info', info: 1 },
      name: { type: 'info', info: 'Hydrogen' },
      weight: { type: 'info', info: 1.0079 },
      symbol: { type: 'info', info: 'H' },
      icon: { type: 'icon', icon: 'delete', tooltip: 'Borrar' },
    },
    {
      position: { type: 'info', info: 1 },
      name: { type: 'info', info: 'Hydrogen' },
      weight: { type: 'info', info: 1.0079 },
      symbol: { type: 'info', info: 'H' },
      icon: { type: 'icon', icon: 'delete', tooltip: 'Borrar' },
    },
    {
      position: { type: 'info', info: 1 },
      name: { type: 'info', info: 'Hydrogen' },
      weight: { type: 'info', info: 1.0079 },
      symbol: { type: 'info', info: 'H' },
      icon: { type: 'icon', icon: 'delete', tooltip: 'Borrar' },
    },
    {
      position: { type: 'info', info: 1 },
      name: { type: 'info', info: 'Hydrogen' },
      weight: { type: 'info', info: 1.0079 },
      symbol: { type: 'info', info: 'H' },
      icon: { type: 'icon', icon: 'delete', tooltip: 'Borrar' },
    },
    {
      position: { type: 'info', info: 1 },
      name: { type: 'info', info: 'Hydrogen' },
      weight: { type: 'info', info: 1.0079 },
      symbol: { type: 'info', info: 'H' },
      icon: { type: 'icon', icon: 'delete', tooltip: 'Borrar' },
    },
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
      view: 'ID',
    },
    {
      name: 'name',
      view: 'Nombre',
    },
    {
      name: 'weight',
      view: 'Peso',
    },
    {
      name: 'symbol',
      view: 'Simbolo',
    },
    {
      name: 'icon',
      view: 'Accion',
    },
  ];

  objInfoCard: InfoCard = {
    id: 1,
    title: 'Este es un ejemplo',
    subtitle: 'Subtitulu',
    textContent: 'Este es un ejemploo!!!',
    listContent: [
      {
        img: '',
        title: 'Primera Fila',
        text: 'Este texto es de la fila 1',
        tertiaryBtn: new BtnInfo(),
      },
      {
        img: '',
        title: 'Segunda Fila',
        text: 'Este texto es de la fila 2',
        tertiaryBtn: new BtnInfo(),
      },
      {
        img: '',
        title: 'Tercera Fila',
        text: 'Este texto es de la fila 3',
        tertiaryBtn: new BtnInfo(),
      },
    ],
    primaryBtn: {
      icon: 'delete',
      text: 'Borrar',
      toolTip: '',
    },
    secondaryBtn: {
      icon: 'edit',
      text: 'Editar',
      toolTip: '',
    },
  };
  Toogle() {
    this.drawer.toggle();
  }

  Mode() {
    this.sidenavChange.emit({ mode: this.drawer.mode });
  }
}
