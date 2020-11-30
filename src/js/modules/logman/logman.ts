function logman(loginfo: string): void { 
  
  const logData: string = loginfo;
  const loggerURL = '/php/logger.php';

  fetch(loggerURL, {
    method: 'post',
    body: logData
  }).then(data => {
    // data is anything returned by your API/backend code
    console.log(data);
  });
}
export default logman;
