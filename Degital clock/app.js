let ampm =document.getElementById('ampm');
let dateElement = document.getElementById('date');
let dayElement = document.getElementById('day');


function display(){
    let dateTime = new Date();
    let hour = dateTime.getHours()
    let min = addzero(dateTime.getMinutes())
    let sec = addzero(dateTime.getSeconds())
    let date = dateTime.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    let day = dateTime.toLocaleDateString(undefined, { weekday: 'long' });

    
    if(hour>12){
        hour = hour - 12
        ampm.innerHTML = 'PM'

    }

    document.getElementById("hours").innerHTML = addzero(hour)
    document.getElementById("mins").innerHTML = min   
    document.getElementById("seconds").innerHTML = sec
    dateElement.innerHTML = date;
    dayElement.innerHTML = day;
}
function addzero(n){
    return n<10?"0"+n:n
}

setInterval(display,100)