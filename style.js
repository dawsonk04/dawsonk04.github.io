
alert('linking worked')

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcomeDiv = document.getElementById('welcome')

let message = ''

if (isMorning) {
    message = 'good morning!'
}
else if (isAfternoon) {
    message = 'good afternoon!'
}
else if (isEvening) {
    message = 'good evening!'
}

 
welcomeDiv.textContent = message;
