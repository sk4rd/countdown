var date = new Date("January 2, 2023 00:06:00").getTime();

var countdown = setInterval(function() {
    var currentDate = new Date().getTime();
    var delta = date - currentDate;
    var days = Math.floor(delta / (1000 * 60 * 60 * 24));
    var hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((delta % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);
