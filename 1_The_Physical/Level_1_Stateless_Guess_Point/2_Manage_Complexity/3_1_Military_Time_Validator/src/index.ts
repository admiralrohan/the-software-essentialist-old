/**
 * @param timeRange Example "25:00 - 12:23"
 * @returns Whether it is valid time range
 */
export default function militaryTimeValidator(timeRange: string): boolean {
  if (timeRange === "") return false;

  const splittedTimeRange = timeRange.split(" - ");
  const [startTime, endTime] = splittedTimeRange;

  const isStartTimeValid = isTimeValid(startTime);
  const isEndTimeValid = isTimeValid(endTime);

  return isStartTimeValid && isEndTimeValid;
}

/**
 * @param time In this format "22:10"
 * @returns Whether it's valid time or not
 */
function isTimeValid(time: string): boolean {
  const [hour, min] = time
    .split(":")
    .filter((item) => item.length === 2)
    .map((item) => Number(item));

  return hour >= 0 && hour < 24 && min >= 0 && min < 60;
}
