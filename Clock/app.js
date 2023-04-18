const lbl = document.getElementById("lbl");

update();

setInterval(update, 1000);

function update() {
    let date = new Date();

    lbl.innerHTML = formatTime(date);

    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrpm = hours >= 12 ? "pm" : "am";
        hours = hours % 12 || 12;

        hours = formatZero(hours);
        minutes = formatZero(minutes);
        seconds = formatZero(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrpm}`;
    }

    function formatZero(time) {
        time = time.toString();
        return time.lenght < 2 ? "0" + time : time;
    }
}

lbl.style.color = 'black';
lbl.style.marginTop = '15rem';
lbl.style.fontSize = '7rem';
lbl.style.display = 'flex';
lbl.style.justifyContent = 'center';
document.body.style.backgroundColor = '#f4f4f4';