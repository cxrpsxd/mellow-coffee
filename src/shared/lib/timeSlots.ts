export function generateTimeSlots(
  startHour = 10,
  endHour = 22,
  stepMinutes = 30,
): string[] {
  const slots: string[] = [];
  for (let minutes = startHour * 60; minutes <= endHour * 60; minutes += stepMinutes) {
    const h = Math.floor(minutes / 60)
      .toString()
      .padStart(2, '0');
    const m = (minutes % 60).toString().padStart(2, '0');
    slots.push(`${h}:${m}`);
  }
  return slots;
}
