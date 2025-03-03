document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter_btn");
    const articles = document.querySelectorAll(".content__card");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            articles.forEach(article => {
                const category = article.getAttribute("data-category");

                if (filter === "all" || category === filter) {
                    article.style.display = "block"; 
                } else {
                    article.style.display = "none"; 
                }
            });
        });
    });
});

// annimation
document.addEventListener("DOMContentLoaded", function () {
    const contentCards = document.querySelectorAll(".content__card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2, 
    });

    contentCards.forEach((card) => {
        observer.observe(card);
    });
});
