// Thanks to: https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function startTimer(duration, elem) {
    var timer = duration, minutes, seconds;

    setInterval(function () {
        days = parseInt(timer / (60 * 60 * 24))
        hours = parseInt(timer / (60 * 60) % 24)
        minutes = parseInt((timer / 60) % 60, 10);
        seconds = parseInt(timer % 60, 10);

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        elem.querySelector('.days .timebox-number').textContent = days;
        elem.querySelector('.hours .timebox-number').textContent = hours;
        elem.querySelector('.minutes .timebox-number').textContent = minutes;
        elem.querySelector('.seconds .timebox-number').textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    // Get data-time attr and sub now.
    var launch_date_unix = document.querySelector('.countdown-timer').getAttribute('data-launch-date');
    var now_unix = Math.round(Date.now()/1000);
    var diff = launch_date_unix - now_unix;
    var elem = document.querySelector('.countdown-timer');

    startTimer(diff, elem);
};