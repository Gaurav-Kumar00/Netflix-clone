let accordions = document.querySelectorAll(".accordion");

accordions.forEach((arrayElement) => {
    arrayElement.addEventListener("click", () => {
        if (arrayElement.classList.contains("active")) {
            arrayElement.classList.remove("active");
        } else {
            arrayElement.classList.add("active");
            accordions.forEach((againArrayElement) => {
                if (arrayElement != againArrayElement) {
                    againArrayElement.classList.remove("active");
                }
            });
        }
    });
});
