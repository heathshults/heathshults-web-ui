"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeStamper = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
* @fileOverview
* @author Heath Shults - Heath Shults
* @version 1.0.0
* @description
*
* @class  TimeStamper
* @param dt {date|Object} = new Date - object to hold the date and time
* @param format string - specify the format: datetime, date, time and justyear
* @const DD string - Returns the day formatted like '19'.
* @const MM string  - Returns the month farmatted like '01.
* @const YYYY string - Returns the year farmatted like '2020.
* @const datetime string - Returns all constiables concatenated like 01-29-2020 13:05:22.
* @const datetimereverse string - Returns all constiables concatenated like 2020-01-29 13:05:22.
* @const date string - Returns all constiables associated with the date like 01-29-2020.
* @const time string - Returns time constiables like 13:05:22.
* @const mm string - Returns minutes formatted like 01-29-2020 13:05:22.
* @const ss string - Returns the seconds formatted like 01-29-2020 13:05:22.
*
* @usage Create a new TimeStamper and pass the desired format.
*  const dt = new TimeStamper('datetime');
*  console.log(dt);
*
*/


var TimeStamper = function TimeStamper(format) {
  (0, _classCallCheck2.default)(this, TimeStamper);
  this.dt = new Date();
  this.format = format;
  this.result; // ensure date comes as 01, 09 etc

  var DD = "0".concat(this.dt.getDate()).slice(-2),
      // getMonth returns month from 0
  MM = "0".concat(this.dt.getMonth() + 1).slice(-2),
      YYYY = this.dt.getFullYear(),
      hh = "0".concat(this.dt.getHours()).slice(-2),
      mm = "0".concat(this.dt.getMinutes()).slice(-2),
      ss = "0".concat(this.dt.getSeconds()).slice(-2),
      datetime = "".concat(MM, "-").concat(DD, "-").concat(YYYY, " ").concat(hh, ":").concat(mm, ":").concat(ss),
      datetimereverse = "".concat(YYYY, "-").concat(MM, "-").concat(DD, " ").concat(hh, ":").concat(mm, ":").concat(ss),
      justdate = "".concat(MM, "-").concat(DD, "-").concat(YYYY),
      justtime = "".concat(hh, ":").concat(mm, ":").concat(ss),
      justyear = YYYY;

  if (format === 'datetime') {
    this.result = datetime;
  } else if (format === 'datetimereverse') {
    this.result = datetimereverse;
  } else if (format === 'justdate') {
    this.result = justdate;
  } else if (format === 'justtime') {
    this.result = justtime;
  } else if (format === 'justyear') {
    this.result = justyear;
  } else if (format === '' || (0, _typeof2.default)('undefined')) {
    this.result = datetime;
  } else {
    this.result = TimeStamper.datetime;
  }

  return this.result;
}; // const _TimeStamper=TimeStamper;
// export {_TimeStamper as TimeStamper};


exports.TimeStamper = TimeStamper;
var dtStamper = new TimeStamper('datetime'); // eslint-disable-next-line no-console

console.log('It is: ' + dtStamper.result);