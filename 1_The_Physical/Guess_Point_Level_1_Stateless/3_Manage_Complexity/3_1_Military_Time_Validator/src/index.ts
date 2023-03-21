function isValidHour(number: number): boolean {
  return number >= 0 && number <= 23;
}
function isValidMinute(number: number): boolean {
  return number >= 0 && number <= 60;
}
function isValidTime(time: number[]): boolean {
  const [hour, minute] = time;

  return isValidHour(hour) && isValidMinute(minute);
}

function isValidMilitaryTimeRange(timeRange: string): boolean {
  const [startTime, endTime] = timeRange
    .split(" - ")
    .map((time) => time.split(":"))
    .map((value) => value.map((item) => Number(item)));

  return isValidTime(startTime) && isValidTime(endTime);
}

export default isValidMilitaryTimeRange;
