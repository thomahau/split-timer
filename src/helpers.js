export function formatTime(ms) {
  let millisecondsLeft = ms;

  const hours = Math.floor(millisecondsLeft / 3600000);
  millisecondsLeft = millisecondsLeft % 3600000;

  const minutes = Math.floor(millisecondsLeft / 60000);
  millisecondsLeft = millisecondsLeft % 60000;

  const seconds = Math.floor(millisecondsLeft / 1000);
  millisecondsLeft = millisecondsLeft % 1000;

  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`;
}
