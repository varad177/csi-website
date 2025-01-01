document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute("data-count");
                let count = 0;
                const increment = target / 200;

                const updateCount = () => {
                    count = Math.min(target, count + increment);
                    counter.innerText = Math.ceil(count);
                    console.log(`Updating count for ${counter}:`, count); // Debug
                    if (count < target) {
                        setTimeout(updateCount, 10);
                    }
                };
                

                updateCount();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});