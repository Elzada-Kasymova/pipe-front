// script.js
PipedriveApp.initialize().then((pdApp) => {
    console.log("Pipedrive SDK initialized");

    const form = document.getElementById("jobForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const res = await fetch("https://pipe-back.onrender.com/api/create-deal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            alert("Deal created successfully!");
            form.reset();

            // Закрыть модалку после успешной отправки
            pdApp.closeModal();
        } else {
            alert("Something went wrong.");
        }
    });
});
