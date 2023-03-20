function isValidHour(number: number): boolean {
  return number >= 0 && number <= 23;
}

function isValidMilitaryTimeRange(timeRange: string): boolean {
  const [startHour, endHour] = timeRange
    .split(" - ")
    .map((time) => Number(time.split(":")[0]));

  return isValidHour(startHour) && isValidHour(endHour);
}

export default isValidMilitaryTimeRange;
