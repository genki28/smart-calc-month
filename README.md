## smart-calc-month

*Wouldn't you like to be free from the tedious calculation of days?*

### Getting
The first step when using smart-calc-month is installing its npm package:
```
$ yarn add smart-calc-month
```

or

```
$ npm install smart-calc-month
```

### How to use
```
import SmartCalcMonth from "smart-calc-month";

const smartCalcMonth = new SmartCalcMonth(2021, 8)
smartCalcMonth.isLeapYear(); // false
smartCalcMonth.calcDayInMonth(); // 31
```