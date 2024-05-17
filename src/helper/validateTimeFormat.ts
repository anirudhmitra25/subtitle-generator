export default function validateTimeFormat(time: string) {
  const timeFormat = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
  return timeFormat.test(time);
}
