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
export class TimeStamper {
    constructor(format: any);
    dt: Date;
    format: any;
    result: any;
}
