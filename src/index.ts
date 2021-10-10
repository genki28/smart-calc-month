interface SmartCalcMonthInterface {
  isLeapYear(): boolean;
  calcDayInMonth(): number;
}

export default class SmartCalcMonth implements SmartCalcMonthInterface {
  private THIRTY_DAY_IN_MONTH_ARRAY = [4, 6, 9, 11];

  private yearValue: number;
  private monthValue: number;

  constructor(
    year: number,
    month: number
  ) {
    this.yearValue = year;
    this.monthValue = month;
  }

  isLeapYear(): boolean {
    return this.yearValue % 400 === 0 || (this.yearValue % 4 === 0 && this.yearValue % 100 !== 0);
  }

  calcDayInMonth(): number {
    if (this.monthValue === 2) {
      if (this.isLeapYear()) {
        return 29;
      }
      return 28;
    }

    if (this.THIRTY_DAY_IN_MONTH_ARRAY.includes(this.monthValue)) {
      return 30;
    }

    return 31;
  }
}