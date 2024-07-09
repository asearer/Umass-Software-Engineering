const { hours, minutes } = require("./TimewordSetup");

const checkForErrors = (timeString, hoursLookup, minutesLookup) => {
    if (typeof timeString !== 'string') throw new Error("The input time must be a string.");

    const splitTime = timeString.split(":");

    if (!hoursLookup[splitTime[0]] || !minutesLookup[splitTime[1]]) 
    throw new Error("Time string does not represent a real time.");
};

const timeToWords = inputTime => {
    checkForErrors(inputTime, hours, minutes);
    inputTime = inputTime.split(':');
    const inputHour = inputTime[0];
    const inputMinute = inputTime[1];
    let timeIntoWords;
    
    if (inputHour === '00' && inputMinute === '00') return 'midnight';
    if (inputHour === '12' && inputMinute === '00') return 'noon';
    if (inputHour === '00' && parseInt(inputMinute) > 0) return `twelve ${minutes[inputMinute]} AM`;

    if (parseInt(inputHour) > 0 && inputMinute === '00') {
        timeIntoWords = `${hours[inputHour]} o'clock`;
    } else {
        timeIntoWords = `${hours[inputHour]} ${minutes[inputMinute]}`;
    };

    return parseInt(inputHour) < 12 ? `${timeIntoWords} AM` : `${timeIntoWords} PM`;
};

module.exports = {
    checkForErrors,
    timeToWords
};


