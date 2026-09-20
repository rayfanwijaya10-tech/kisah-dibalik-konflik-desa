function mulaiCerita() {

    document.getElementById("cerita").scrollIntoView({
        behavior: "smooth"
    });

}


// Tombol untuk berpindah bagian cerita

function nextSection(id) {

    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

}


// Animasi ketika bagian website terlihat

const elements = document.querySelectorAll(
    ".story-content, .result-content, .impact-card, .step, .member"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach((element) => {

    observer.observe(element);

});