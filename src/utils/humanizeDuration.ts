export function humanizeDuration(durationInMinutes: number) {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  const hoursText = hours === 1 ? "hour" : "hours";
  const minutesText = minutes === 1 ? "minute" : "minutes";

  let humanizedDuration = "";
  if (hours > 0) {
    humanizedDuration += `${hours} ${hoursText}`;
  }
  if (minutes > 0) {
    if (hours > 0) {
      humanizedDuration += " and ";
    }
    humanizedDuration += `${minutes} ${minutesText}`;
  }

  return humanizedDuration;
}
