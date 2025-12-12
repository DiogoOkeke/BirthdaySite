"use strict"

// Get the elements from the DOM
const loadSite = document.querySelector('.loadSite');
const mainSite = document.querySelector('.mainSite');
const percentageDisplay = document.querySelector('.percentageDisplay');
const progressState = document.querySelector('.progressState');
const loadingText = document.querySelector('.loadingText');

// Define the text changes based on percentage
const statusMessages = [
    { threshold: 0, text: "Birthday Loading(literally)..." },
    { threshold: 25, text: "Initializing fun..." },
    { threshold: 50, text: "Verifying age..." },
    { threshold: 75, text: "To the queen of mirth..." },
    { threshold: 100, text: "To the 'Elle Woods' of Imoke..." }
];

let currentPercentage = 0;
const intervalTime = 1900; // Update every 50 milliseconds

const loadingInterval = setInterval(() => {
    if (currentPercentage < 100) {
        currentPercentage = Math.min(100, currentPercentage + 25); // Increment by 1
    } else {
        // Stop the interval when 100% is reached
        clearInterval(loadingInterval);
        return; // Exit the function
    }

    // 1. Update the Percentage Number
    percentageDisplay.textContent = `${currentPercentage}%`;

    // 2. Update the Progress Bar Width
   // progressState.style.width = `${currentPercentage}%`;

    // 3. Update the Text based on the Percentage (or "loading state")
    // Find the message for the current state
    const currentStatus = statusMessages
        .slice() // Create a copy to reverse without modifying original
        .reverse()
        .find(message => currentPercentage >= message.threshold);

    if (currentStatus) {
        loadingText.textContent = currentStatus.text;
    }

}, intervalTime); // The interval runs until it hits 100%

let loadPage = () => {
  loadSite.style.display = 'none';
  mainSite.classList.add('activeMainSite');
 } 

setTimeout(loadPage, 9000);



// Nav Bar 


let navBar = document.querySelector('.nav-bar');
let firstBar = document.querySelector('.first-bar');
let secondBar = document.querySelector('.mid-bar');
let lastBar = document.querySelector('.last-bar');
let navContent = document.querySelector('.nav-content');



let clicked = false;

navBar.onclick = () => {
 if(!clicked){
  firstBar.classList.add('true');
  secondBar.classList.add('true');
  lastBar.classList.add('true');
  navBar.classList.add('true');
  navBar.style.top = '3.1rem';
  navContent.classList.add('true');
  clicked = true;
 }
 else{
  firstBar.classList.remove('true');
  secondBar.classList.remove('true');
  lastBar.classList.remove('true');
  navBar.classList.remove('true');
  navBar.style.top = '2.5rem';
  navContent.classList.remove('true');
  clicked = false;
 }
}

/*let timeText = document.querySelector('.time-text');

let time = () =>  {

let dateTime = new Date();
let hours = dateTime.getHours(); 
let mins = dateTime.getMinutes();
let sec = dateTime.getSeconds();
let meridian = '';

if(hours >= 12){
 hours -= 12;
 meridian = 'PM';
}
else{
 meridian = 'AM';
}

if(hours == 00 && meridian == 'PM'){
 hours = 12;
}


/*if(hours < 10){
 hours = '0' + hours;
}*/
/*hours = hours < 10 ? `0${hours}` : hours;

/*if(mins < 10){
 mins = '0' + mins;
}*/
/*mins = mins < 10 ? `0${mins}` : mins;

/*if(secs < 10){
 secs = '0' + secs;
}*/
/*sec = sec < 10 ? `0${sec}` : sec;

timeText.textContent = `${hours}:${mins}:${sec} ${meridian}`;
}

time();
setInterval(time, 1000);*/



  // 3. Convert the date to the target time zone string.
  // 'en-US' is the locale, which determines language and formatting style.
  // The options object determines the time zone.
let timeText = document.querySelector('.time-text');
/*const now = new Date();

// Get the individual UTC components
const hoursUTC = now.getUTCHours();
const minutesUTC = now.getUTCMinutes();
const secondsUTC = now.getUTCSeconds();

console.log(`UTC Time: ${hoursUTC}:${minutesUTC}:${secondsUTC}`);
timeText.timeContent = ` ${hoursUTC}:${minutesUTC}:${secondsUTC}`;
// Or, use the built-in string converter:
console.log(`UTC String: ${now.toUTCString()}`);*/
function updateClock() {
  
  const now = new Date();

const options = {
  timeZone: 'Africa/Lagos',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h12',
};
  
  const localTime = now.toLocaleString('en-US', options);
  timeText.textContent = localTime;
console.log(`time: ${localTime}`);
}


updateClock();
setInterval(updateClock, 1000);


