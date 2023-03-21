function isValidHour(value: number): boolean {
  return value >= 0 && value <= 23;
}
function isValidMinute(value: number): boolean {
  return value >= 0 && value <= 60;
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
