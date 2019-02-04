import * as DU from './dateUtils'
import {pad} from './valueUtils'
import {DayData} from '../Interface'



export function FromTo(date: Date): Date[] {

  let dayCount = DU.getFirstDate(date);
  let lastDay = DU.getLastDate(date);
  let day: Date[] = [];

  do {
    // day.push( {stringDate : formatDateV1(date, dayCount), dayNum : dayCount, isActive : true})
    day.push(new Date(date.setDate(dayCount)))
    dayCount++;
  } while (dayCount <= lastDay)

  return day
}


export function formatDateV1(date: Date, editDay: number = date.getDate()) {
  let d = date,
    month = pad(d.getMonth() + 1),
    day = pad(editDay),
    year = d.getFullYear();

  return [year, month, day].join('-');
}

export function formatDateV2(date: Date): string {
  return date.toISOString().split('T')[0]
}

export function finalizedMonth(date: Date, monthContent: Date[]) {
  let count = 0
  let firstDay = DU.getFirstDay(date)
  let lastDay = DU.getLastDay(date)

  if (firstDay !== 0) {
    do {
      monthContent.unshift(DU.getFlexDate(date, -Math.abs(count)))
      count++;
    } while (count < firstDay)
  }

  count = 6
  if (lastDay !== 6) {
    let x = 1
    do {
      monthContent.push(DU.getFlexDate(date, Math.abs(x), 1))
      x++;
      count--;
    } while (count > lastDay)
  }
  return monthContent
}

export function generateDateData(date: Date): DayData {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  let dateString = formatDateV1(date)

  return {
    year,
    month,
    day,
    dateString
  }
}