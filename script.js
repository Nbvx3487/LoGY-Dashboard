const tg = window.Telegram.WebApp;

tg.ready();

// tg.BackButton.show();

tg.BackButton.onClick(() => {
    tg.close();
});


fetch("event.json")
    .then(response => response.json())
    .then(data => {

        document.getElementById("title").textContent = data.title;


        const container = document.getElementById("sections");


        data.sections.forEach(section => {

            const wrapper = document.createElement("div");
            wrapper.className = "section";


            const button = document.createElement("button");
            button.className = "section-title";
            button.textContent = `${section.icon} ${section.title}`;


            const content = document.createElement("div");
            content.className = "content";
            content.textContent = section.content;


            button.addEventListener("click", () => {

                content.classList.toggle("open");

            });


            wrapper.appendChild(button);
            wrapper.appendChild(content);

            container.appendChild(wrapper);

        });

    })
    .catch(error => {

        console.error("Failed to load event data:", error);

    });

    document.documentElement.style.setProperty(
        "--background",
        tg.backgroundColor
    );
    
    document.documentElement.style.setProperty(
        "--text",
        tg.textColor
    );