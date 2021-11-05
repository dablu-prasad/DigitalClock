
function calcTime() {
    let date;
    setInterval(() => {
        date = new Date().toLocaleString('en-US', { timeZone: "Asia/Karachi" });
        document.getElementById('clock').innerHTML = date;
    }, 1000);
}
