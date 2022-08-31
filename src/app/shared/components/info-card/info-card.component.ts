import { Component, OnInit, Input } from '@angular/core';
import { InfoCard } from 'src/app/shared/models/IInfoCard';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  @Input() data: InfoCard;

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
