export function baseDate(date: Date) {
  let year = date.getFullYear();
  let month = date.getMonth();

  return [year, month]
}

export function getFirstDate(date: Date): number {
  let dateConvert = baseDate(date)

  return new Date(dateConvert[0], dateConvert[1], 1).getDate();
}

export function getLastDate(date: Date): number {
  let dateConvert = baseDate(date)

  return new Date(dateConvert[0], dateConvert[1] + 1, 0).getDate();
}

export function getLastDay(date: Date): number {
  let dateConvert = baseDate(date)

  return new Date(dateConvert[0], dateConvert[1] + 1, 0).getDay();
}

export function getFirstDay(date: Date) {
  let dateConvert = baseDate(date)

  return new Date(dateConvert[0], dateConvert[1], 1).getDay();
}

export function getFlexDate(date: Date, control: number, next: number = 0) {
  let oldDateConvert = baseDate(date);
  let newDate = new Date(oldDateConvert[0], oldDateConvert[1] + next, control)
  return newDate
}

export function sameMonth(selectedDate: string, currentDate: string): boolean {
  return true
}