document.getElementById("jobForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
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
        e.target.reset();
    } else {
        alert("Something went wrong.");
    }
});
