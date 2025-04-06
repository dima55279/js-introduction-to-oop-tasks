export default class Time {
  // BEGIN
  static fromString(time) {
    return new Time(Number(time.split(':')[0]), Number(time.split(':')[1]));
  }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}