import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MiniCardComponent {
  @Input() icon: string | undefined;
  @Input() appName: string | undefined;
  @Input() totalUser: string | undefined;
  @Input() totalTransaction: string | undefined;
  @Input() color: string | undefined;
  @Input() isUserIncrease: boolean | undefined;
  @Input() isTransactionIncrease: boolean | undefined;
  @Input() duration: string | undefined;
  @Input() userPercentValue: string | undefined;
  @Input() transactionPercentValue: string | undefined;

  constructor() { }
}