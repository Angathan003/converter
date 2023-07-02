let ampm =document.getElementById('ampm');
let dateElement = document.getElementById('date');
let dayElement = document.getElementById('day');
let countryElement = document.getElementById('country');

function display(){
    let dateTime = new Date();
    let hour = dateTime.getHours()
    let min = addzero(dateTime.getMinutes())
    let sec = addzero(dateTime.getSeconds())
    // let date = dateTime.toLocaleDateString(undefined, {
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric'
    //   });
    // let day = dateTime.toLocaleDateString(undefined, { weekday: 'long' });

    
    // if(hour>12){
    //     hour = hour - 12
    //     ampm.innerHTML = 'PM'

    // }

    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        // timeZoneName: 'short'
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
          
          let [countryHour, countryMin, countrySec] = countryDateTime.split(':');
          hour = parseInt(countryHour);
          min = parseInt(countryMin);
          sec = parseInt(countrySec);
          
          countryElement.innerHTML = country;
          dateElement.innerHTML = date;
          dayElement.innerHTML = dateTime.toLocaleDateString(undefined, { weekday: 'long' });
        })
        .catch(error => {
          console.error('Error:', error);
        });

         if(hour>12){
        hour = hour - 12
        ampm.innerHTML = 'PM'

        }

    document.getElementById("hours").innerHTML = addzero(hour)
    document.getElementById("mins").innerHTML = min   
    document.getElementById("seconds").innerHTML = sec
    // dateElement.innerHTML = date;
    // dayElement.innerHTML = day;
}
function addzero(n){
    return n<10?"0"+n:n
}

setInterval(display,100)