let ampm = document.getElementById('ampm');
let dateElement = document.getElementById('date');
let dayElement = document.getElementById('day');
let countryElement = document.getElementById('country');
let clockElement = document.getElementById('clock');

function display() {
  let dateTime = new Date();
  let hour = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    let country = data.country_name;
    let timeZone = data.timezone;
    let date = dateTime.toLocaleDateString(undefined, options);
    
    // Adjusting the time based on the country's time zone
    let countryDateTime = dateTime.toLocaleString('en-US', {
      timeZone: timeZone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
      });

      
      if (hour >= 12) {
        ampm.innerHTML = 'PM';
      } else {
        ampm.innerHTML = 'AM';
      }    

      let [countryHour, countryMin, countrySec] = countryDateTime.split(':');
      hour = parseInt(countryHour);
      min = parseInt(countryMin);
      sec = parseInt(countrySec);
      countryElement.innerHTML = country;
      dateElement.innerHTML = date;
      dayElement.innerHTML = dateTime.toLocaleDateString(undefined, { weekday: 'long' });



      document.getElementById("hours").innerHTML = addZero(hour);
      document.getElementById("mins").innerHTML = addZero(min);
      document.getElementById("seconds").innerHTML = addZero(sec);

      updateClock(hour, min, sec);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function addZero(n) {
  return n < 10 ? "0" + n : n;
}

function updateClock(hour, min, sec) {
  let rotationHour = (hour % 12) * 30 + min * 0.5;
  let rotationMin = min * 6 + sec * 0.1;
  let rotationSec = sec * 6;

  document.getElementById("hour-hand").style.transform = `rotate(${rotationHour}deg)`;
  document.getElementById("minute-hand").style.transform = `rotate(${rotationMin}deg)`;
  document.getElementById("second-hand").style.transform = `rotate(${rotationSec}deg)`;
}

setInterval(display, 1000);
