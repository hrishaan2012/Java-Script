function updateDate() {
    const now = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dayName = days[now.getDay()];
    const date = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();

    const formattedDate = `${dayName}, ${date} ${monthName} ${year}`;
    document.getElementById("dateDisplay").textContent = formattedDate;
}

updateDate();
setInterval(updateDate, 60000);
  