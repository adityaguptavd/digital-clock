function addTrailingZero(num) {
    return num < 10 ? "0" + num : num;
}

function updateTime() {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const amPm = hours > 12 ? "PM" : "AM";
    const otherAmPm = hours > 12 ? "AM" : "PM";

    hours = hours % 12 || 12;

    hours = addTrailingZero(hours);
    minutes = addTrailingZero(minutes);
    seconds = addTrailingZero(seconds);

    document.querySelector('#hour').textContent = hours;
    document.querySelector('#min').textContent = minutes;
    document.querySelector('#sec').textContent = seconds;
    document.querySelector('#ampm').textContent = amPm;
    document.querySelector('.other-ampm').textContent = otherAmPm;
}

updateTime();
setInterval(() => updateTime(), 1000);