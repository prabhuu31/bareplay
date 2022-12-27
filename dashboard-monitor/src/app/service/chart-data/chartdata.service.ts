import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor() { }

  getUserData(year:string) {
    return [  
      { data: [Math.floor(100 + Math.random() * 900), 150, Math.floor(100 + Math.random() * 900), 81, 156, Math.floor(100 + Math.random() * 900), 140, 78, 467,276, 56, 72], label: 'TranSpare' },
      { data: [65, 359, Math.floor(100 + Math.random() * 900), Math.floor(100 + Math.random() * 900), 156, 55, Math.floor(100 + Math.random() * 900), 278, 267,276, 156, 79], label: 'TranModal' },
      { data: [265, 159, Math.floor(100 + Math.random() * 900), 81, Math.floor(100 + Math.random() * 900), 55, 40, 178, 467,276, 56, 172], label: 'TransAir' },
      { data: [65, Math.floor(100 + Math.random() * 900), 180, Math.floor(100 + Math.random() * 900), 56, 55, 40, 378, 167,376, 156, 272], label: 'TransILP' },
    ];
  }

  getTransactionData(year:string) {
    return [
      { data: [Math.floor(100 + Math.random() * 900), 150, Math.floor(100 + Math.random() * 900), 81, 156, Math.floor(100 + Math.random() * 900), 140, 78, 467,276, 56, 72], label: 'TranSpare' },
      { data: [65, 359, Math.floor(100 + Math.random() * 900), Math.floor(100 + Math.random() * 900), 156, 55, Math.floor(100 + Math.random() * 900), 278, 267,276, 156, 79], label: 'TranModal' },
      { data: [265, 159, Math.floor(100 + Math.random() * 900), 81, Math.floor(100 + Math.random() * 900), 55, 40, 178, 467,276, 56, 172], label: 'TransAir' },
      { data: [65, Math.floor(100 + Math.random() * 900), 180, Math.floor(100 + Math.random() * 900), 56, 55, 40, 378, 167,376, 156, 272], label: 'TransILP' },
    ];
  }
}
