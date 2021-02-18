"use strict";
exports.__esModule = true;
function logman(loginfo) {
    var logData = loginfo;
    var loggerURL = '/php/logger.php';
    fetch(loggerURL, {
        method: 'post',
        body: logData
    }).then(function (data) {
        // data is anything returned by your API/backend code
        console.log(data);
    });
}
exports["default"] = logman;
