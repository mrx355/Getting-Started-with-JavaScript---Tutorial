/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Dikshant Kamboj
   Date: 2024-06-03

*/

// Display the current date & time
document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";

//Display the time left until New Year's End
document.getElementById("days").innerHTML = "dd";
document.getElementById("hrs").innerHTML = "hr";
document.getElementById("mins").innerHTML = "mm";
document.getElementById("secs").innerHTML = "ss";

//New variable for date-time
var currentDay = new Date("June 04, 2024 15:29:05");
var dateString = currentDay.toLocaleDateString();
var timeString = currentDay.toLocaleTimeString();

//We are dynamically setting Current Time
document.getElementById("dateNow").innerHTML =
dateString + "<br />" + timeString;

var newYear = new Date("January 1, 2025");
var nextYear = currentDay.getFullYear() +1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDay) / (1000*60*60*24);
document.getElementById("days").innerHTML = daysLeft;

//Display the time left until New Year's Eve
daysLeft.innerHTML = daysLeft;
days.textContent = Math.floor(daysLeft);

//Hours
var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
document.getElementById("hrs").textContent = Math.floor(hrsLeft);

//Minutes
var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
document.getElementById("mins").textContent = Math.floor(minsLeft);

//Seconds
var secsLeft = (minsLeft - Math.floor(minsLeft))*60;
document.getElementById("secs").textContent = Math.floor(secsLeft);