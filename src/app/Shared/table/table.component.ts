import { Component, OnInit, Input } from '@angular/core';

export interface columns {
  nameID: string;
  title: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() dataSource: any[] = [];
  @Input() objColumns: any[] = [];
  displayedColumns: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.objColumns.map((a) => a.name);
    console.log(this.displayedColumns);
  }
}
