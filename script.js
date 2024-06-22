// Countdown Timer
const countdown = () => {
    const anniversaryDate = new Date("Feb 22, 2024").getTime();
    const now = new Date().getTime();
    const distance = anniversaryDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "Happy Anniversary!";
    }
};
setInterval(countdown, 1000);

// Love Notes
const addNote = () => {
    const noteInput = document.getElementById("noteInput").value;
    if (noteInput) {
        const noteList = document.getElementById("noteList");
        const noteItem = document.createElement("li");
        noteItem.textContent = noteInput;
        noteList.appendChild(noteItem);
        document.getElementById("noteInput").value = "";
    }
};