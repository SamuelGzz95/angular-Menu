import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  @Input() dataSourceInput: any[] = [];
  @Input() objColumns: any[] = [];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.objColumns.map((a) => a.name);
    this.dataSource.data = this.dataSourceInput;
    console.log(this.dataSource);
  }
}
