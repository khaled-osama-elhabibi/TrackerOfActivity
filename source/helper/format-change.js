const convertSecondsToHMSFormat = allSeconds => {
  allSeconds = Number(allSeconds);
  let hours = Math.floor(allSeconds / 3600);
  let minutes = Math.floor((allSeconds % 3600) / 60);
  let seconds = Math.floor((allSeconds % 3600) % 60);
  let hDisplay = hours > 0 ? (hours < 10 ? '0' + hours : hours) : '00';
  let mDisplay =
    minutes > 0 ? (minutes < 10 ? ':0' + minutes : ':' + minutes) : ':00';
  let sDisplay =
    seconds > 0 ? (seconds < 10 ? ':0' + seconds : ':' + seconds) : ':00';
  return hDisplay + mDisplay + sDisplay;
};
export default convertSecondsToHMSFormat;
