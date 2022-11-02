import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MiniCardSummary } from './mini-card-summary';

@Injectable({
  providedIn: 'root'
})
export class MiniCardSummaryService {

  getMiniCardSummary(): Observable<MiniCardSummary[]> {
    return of([
      {appName:"TranSpare", totalUser: ""+Math.floor(100 + Math.random() * 900), 
      totalTransaction: ""+Math.floor(100 + Math.random() * 900), 
      isUserIncrease: Math.random() < 0.5,
      isTransactionIncrease:Math.random() < 0.5, color: "primary", 
      userPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      transactionPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      icon: "build" },
      { appName:"TranModal", totalUser: ""+Math.floor(100 + Math.random() * 900), 
      totalTransaction: ""+Math.floor(100 + Math.random() * 900), 
      isUserIncrease: Math.random() < 0.5,
      isTransactionIncrease:Math.random() < 0.5, color: "accent", 
      userPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      transactionPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
       icon: "group_work" },
      { appName:"TransAir", totalUser: ""+Math.floor(100 + Math.random() * 900),
       totalTransaction: ""+Math.floor(100 + Math.random() * 900), 
       isUserIncrease: Math.random() < 0.5,
      isTransactionIncrease:Math.random() < 0.5, color: "warn", 
      userPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      transactionPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      icon: "flight" },
      { appName:"TransILP",totalUser: ""+Math.floor(100 + Math.random() * 900), 
      totalTransaction: ""+Math.floor(100 + Math.random() * 900), 
      isUserIncrease: Math.random() < 0.5,
      isTransactionIncrease:Math.random() < 0.5, 
      color: "primary", 
      userPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      transactionPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      icon: "local_shipping" }
    ]);
  }

  getMiniCardDetails(): Observable<MiniCardSummary[]> {
    return of([
      {appName:"TranSpare", totalUser: ""+Math.floor(100 + Math.random() * 900), 
      totalTransaction: ""+Math.floor(100 + Math.random() * 900), 
      isUserIncrease: Math.random() < 0.5,
      isTransactionIncrease:Math.random() < 0.5, color: "primary", 
      userPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      transactionPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      icon: "build" },
      { appName:"TranModal", totalUser: ""+Math.floor(100 + Math.random() * 900), 
      totalTransaction: ""+Math.floor(100 + Math.random() * 900), 
      isUserIncrease: Math.random() < 0.5,
      isTransactionIncrease:Math.random() < 0.5, color: "accent", 
      userPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      transactionPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
       icon: "group_work" },
      { appName:"TransAir", totalUser: ""+Math.floor(100 + Math.random() * 900),
       totalTransaction: ""+Math.floor(100 + Math.random() * 900), 
       isUserIncrease: Math.random() < 0.5,
      isTransactionIncrease:Math.random() < 0.5, color: "warn", 
      userPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      transactionPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      icon: "flight" },
      { appName:"TransILP",totalUser: ""+Math.floor(100 + Math.random() * 900), 
      totalTransaction: ""+Math.floor(100 + Math.random() * 900), 
      isUserIncrease: Math.random() < 0.5,
      isTransactionIncrease:Math.random() < 0.5, 
      color: "primary", 
      userPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      transactionPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      icon: "local_shipping" },
      { appName:"TransFer",totalUser: ""+Math.floor(100 + Math.random() * 900), 
      totalTransaction: ""+Math.floor(100 + Math.random() * 900), 
      isUserIncrease: Math.random() < 0.5,
      isTransactionIncrease:Math.random() < 0.5, 
      color: "primary", 
      userPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      transactionPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      icon: "transfer_within_a_station" },
      { appName:"TransMed",totalUser: ""+Math.floor(100 + Math.random() * 900), 
      totalTransaction: ""+Math.floor(100 + Math.random() * 900), 
      isUserIncrease: Math.random() < 0.5,
      isTransactionIncrease:Math.random() < 0.5, 
      color: "primary", 
      userPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      transactionPercentValue: ""+(Math.random() * .08 + Math.random()).toFixed(2), 
      icon: "local_hospital" }
    ]);
  }

  constructor() { }
}