interface SmartCalcMonthInterface {
  /**
   * Check if it's a leap year
   * @return boolean
   */
  isLeapYear(): boolean;
  /**
   * Calculate the number of days in a month
   * @return number
   */
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

  /**
   * Check if it's a leap year
   * @return boolean
   */
  isLeapYear(): boolean {
    return this.yearValue % 400 === 0 || (this.yearValue % 4 === 0 && this.yearValue % 100 !== 0);
  }

  /**
   * Calculate the number of days in a month
   * @return number
   */
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