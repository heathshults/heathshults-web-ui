
// @ts-nocheck
/**
* @fileOverview
* @author Heath Shults
* @version 1.0.0
*/

/**
* @description
* Just JavaScript - Timestamp
*
* @class  TimeStamper
* @param {(date|Object)} dt = new Date - object to hold the date and time
* @param {string} [format] - specify the format: datetime, date, time and justyear
* @param {string} [DD] - Returns the day formatted like '19'.
* @param {string} [MM] - Returns the month farmatted like '01.
* @param {string} [YYYY] - Returns the year farmatted like '2020.
* @param {string} [datetime] - Returns all constiables concatenated like 01-29-2020 13:05:22.
* @param {string} [datetimereverse] - Returns all constiables concatenated like 2020-01-29 13:05:22.
* @param {string} [date] - Returns all constiables associated with the date like 01-29-2020.
* @param {string} [time] - Returns time constiables like 13:05:22.
* @param {string} [mm] - Returns minutes formatted like 01-29-2020 13:05:22.
* @param {string} [ss] - Returns the seconds formatted like 01-29-2020 13:05:22.
*/

/**
 * @usage
 * 
 * <script>
 *  let htmlelement = document.getElementById('dd')
 *  htmlelement.innerHTML = JSON.stringify(TimeStamper('datetime'));  
 * </script>
 * 
 * @note:  tons of room for improvement...
 */

// function TimeStamper() {

  // timerequest();
 
  export class TimeStamper {
    dt: Date;
    format: any;
    final: any;
    static datetime: any;

    constructor(format: string | any) {
      this.dt=new Date();
      this.format=format;
      this.final;

      // ensure date comes as 01, 09 etc
      const DD=('0'+this.dt.getDate()).slice(-2),
  
        // getMonth returns month from 0
        MM=('0'+(this.dt.getMonth()+1)).slice(-2),
        YYYY=this.dt.getFullYear(),
        hh=('0'+this.dt.getHours()).slice(-2),
        mm=('0'+this.dt.getMinutes()).slice(-2),
        ss=('0'+this.dt.getSeconds()).slice(-2),
  
        datetime=MM+'-'+DD+'-'+YYYY+' '+hh+':'+mm+':'+ss,
        datetimereverse=YYYY+'-'+MM+'-'+DD+' '+hh+':'+mm+':'+ss,
        justdate=MM+'-'+DD+'-'+YYYY,
        justtime=hh+':'+mm+':'+ss,
        justyear=YYYY;
  
      if (format==='datetime') {
        this.final=datetime;
      } else if (format==='datetimereverse') {
        this.final=datetimereverse;
      } else if (format==='justdate') {
        this.final=justdate;
      } else if (format==='justtime') {
        this.final=justtime;
      } else if (format==='justyear') {
        this.final=justyear;
      } else if (format===''||typeof 'undefined') {
        this.final=datetime;
      } else {
        this.final=TimeStamper.datetime;
      }
      return this.final;
    }
  }
  
  // const _TimeStamper=TimeStamper;
  // export {_TimeStamper as TimeStamper};
      
  const d = new TimeStamper('datetime');
  // eslint-disable-next-line no-console
  console.log(d.final);
