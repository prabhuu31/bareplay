'use strict';

export const chartLebles =  ['Jan','Feb','Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const pieChartLebles =  ['TranSpare','TransModal', 'TransAir', 'TransILP'];
export const selectedYear = new Date().getFullYear();
export const refershInterval = 15000;
export function getYearList() {
    let years: number[] = [];
    let yearArr : string[] = [];
    for (let year = selectedYear; year >= 2017; year--) {
        yearArr.push(year.toString());
      }
      return yearArr;
  }