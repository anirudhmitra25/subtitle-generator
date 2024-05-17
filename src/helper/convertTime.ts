export default function convertTime(timeStr: string) {
  var a = timeStr.split(":");
  var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];

  return seconds;
}
