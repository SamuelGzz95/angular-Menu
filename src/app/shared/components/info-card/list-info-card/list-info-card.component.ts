import { Component, OnInit, Input } from '@angular/core';
import { ListContent } from 'src/app/shared/models/IInfoCard';

@Component({
  selector: 'app-list-info-card',
  templateUrl: './list-info-card.component.html',
  styleUrls: ['./list-info-card.component.scss'],
})
export class ListInfoCardComponent implements OnInit {
  @Input() dataList: ListContent[];
  constructor() {}

  ngOnInit(): void {}
}
