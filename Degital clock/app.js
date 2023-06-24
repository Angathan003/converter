let ampm =document.getElementById('ampm')
function display(){
    let dateTime = new Date();
    let hour = dateTime.getHours()
    let min = dateTime.getMinutes()
    let sec = dateTime.getSeconds()
    
    if(hour>12){
        hour = hour - 12
        ampm.innerHTML = 'PM'

    }

    document.getElementById("hours").innerHTML = addzero(hour)
    document.getElementById("mins").innerHTML = addzero(min)
    document.getElementById("seconds").innerHTML = addzero(sec)
}

function addzero(n){
    return n<10?"0"+n:n
}

setInterval(display,100)