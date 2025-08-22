function getElapsedTime(timeStamp) {
  const now = new Date();
  const then = new Date(timeStamp);

  const diff = now - then;
  const min = Math.floor(diff / (60 * 1000));
  const hour = Math.floor(diff / (60 * 60 * 1000));
  const days = Math.floor(diff / (60 * 60 * 24 * 1000));

  if (days > 0) return `${days} days ago`;
  if (hour > 0) return `${hour} hours ago`;
  return `${min} minutes ago`;
}

module.exports = { getElapsedTime };
