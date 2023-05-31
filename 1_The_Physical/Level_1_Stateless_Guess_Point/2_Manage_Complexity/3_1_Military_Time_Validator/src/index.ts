/**
 * @param timeRange Example "25:00 - 12:23"
 * @returns Whether it is valid time range
 */
export default function militaryTimeValidator(timeRange: string): boolean {
  if (timeRange === "") return false;

  const splittedTimeRange = timeRange.split("-");
  const startTime = splittedTimeRange[0];
  const endTime = splittedTimeRange[1];

  const isStartTimeValid =
    Number(startTime.split(":")[0]) >= 0 &&
    Number(startTime.split(":")[0]) < 24 &&
    Number(startTime.split(":")[1]) >= 0 &&
    Number(startTime.split(":")[1]) < 60;
  const isEndTimeValid =
    Number(endTime.split(":")[0]) >= 0 &&
    Number(endTime.split(":")[0]) < 24 &&
    Number(endTime.split(":")[1]) >= 0 &&
    Number(endTime.split(":")[1]) < 60;

  return isStartTimeValid && isEndTimeValid;
}
