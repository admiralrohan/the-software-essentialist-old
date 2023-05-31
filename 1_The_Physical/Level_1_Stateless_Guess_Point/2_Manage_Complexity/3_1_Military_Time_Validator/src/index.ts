/**
 * @param timeRange Example "25:00 - 12:23"
 * @returns Whether it is valid time range
 */
export default function militaryTimeValidator(timeRange: string): boolean {
  if (timeRange === "") return false;

  const splittedTimeRange = timeRange.split("-");
  const startTime = splittedTimeRange[0];
  const endTime = splittedTimeRange[1];

  const isStartTimeValid = isTimeValid(startTime);
  const isEndTimeValid = isTimeValid(endTime);

  return isStartTimeValid && isEndTimeValid;
}

/**
 * @param time In this format "22:10"
 * @returns Whether it's valid time or not
 */
function isTimeValid(time: string): boolean {
  return (
    Number(time.split(":")[0]) >= 0 &&
    Number(time.split(":")[0]) < 24 &&
    Number(time.split(":")[1]) >= 0 &&
    Number(time.split(":")[1]) < 60
  );
}
