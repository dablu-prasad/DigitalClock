
function calcTime() {
    let date;
    setInterval(() => {
        date = new Date().toLocaleString('en-US', { timeZone: "Asia/Shanghai" });
        document.getElementById('clock').innerHTML = date;
    }, 1000);
}
