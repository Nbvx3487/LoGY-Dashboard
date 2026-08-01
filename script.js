fetch("event.json")
    .then(response => response.json())
    .then(data => {

        document.getElementById("title").textContent = data.title;

        document.getElementById("place").textContent = data.place;

        document.getElementById("time").textContent = data.time;

        document.getElementById("guests").textContent = data.guests;

    });


const buttons = document.querySelectorAll(".section-title");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        content.classList.toggle("open");

    });

});