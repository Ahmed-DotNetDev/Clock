const lbl = document.getElementById("lbl");

update();

setInterval(update, 1000);

function update() {
    let date = new Date();

    lbl.innerHTML = format(date);

    function format(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrpm = hours >= 12 ? "pm" : "am";
        hours = hours % 12 || 12;
        return `${hours}:${minutes}:${seconds} ${amOrpm}`;
    }
}

lbl.style.color = 'black';
lbl.style.marginTop = '15rem';
lbl.style.fontSize = '7rem';
lbl.style.display = 'flex';
lbl.style.justifyContent = 'center';
document.body.style.backgroundColor = '#f4f4f4';