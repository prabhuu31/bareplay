import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getYearList, selectedYear } from '../core/global';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string | undefined;
  @Output() loadDataChart = new EventEmitter();
  public selectedPeriod!: string;
  @Input() period: string[] = []; 

  constructor() { 
    this.selectedPeriod = selectedYear.toString();
    this.period = getYearList();
  }

  ngOnInit(): void {
  }

  loadData(event: { value: any; }){
    this.selectedPeriod = event.value;
    this.loadDataChart.emit(event.value);
  }
}
