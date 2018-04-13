module.exports = (frames) => {
  let result = 0;
  /*
  for (let i = 0; i < frames.length; i++) {
    result += frames[i][0] + frames[i][1];
  }
  frames.forEach( frames => {
    result += frames[0] + frames[1];
  });
  */
  return frames.map((frame, index, frames) => {
    if((frame[0] + frame[1]) === 10 && frames[index + 1] !== undefined) {
      return 10 + frames[index + 1][0]
    }
    return frame[0] + frame[1];
  }).reduce((acc, currentValue) => acc + currentValue);
}