let ampm =document.getElementById('ampm')
function display(){
    let dateTime = new Date();
    let hour = dateTime.getHours()
    let min = addzero(dateTime.getMinutes())
    let sec = addzero(dateTime.getSeconds())
    
    if(hour>12){
        hour = hour - 12
        ampm.innerHTML = 'PM'

    }

    document.getElementById("hours").innerHTML = addzero(hour)
    document.getElementById("mins").innerHTML = min   
    document.getElementById("seconds").innerHTML = sec
}
function addzero(n){
    return n<10?"0"+n:n
}

setInterval(display,100)