const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;
let reviews = [];

window.addEventListener("DOMContentLoaded", loadReviews);

function loadReviews() {
    fetch("../reviews.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load reviews.json");
            }
            return response.json();
        })
        .then(data => {
            reviews = data;
            showPerson(currentItem);
        })
        .catch(error => console.error("Error fetching reviews:", error));
}

function showPerson(index) {
    if (!reviews.length) {
        console.error("No reviews available");
        return;
    }

    const person = reviews[index];
    if (!person) return;

    img.src = person.img;
    author.textContent = person.name;
    job.textContent = person.job;
    info.textContent = person.text;
}

nextBtn.addEventListener("click", () => {
    currentItem = (currentItem + 1) % reviews.length;
    showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
    currentItem = (currentItem - 1 + reviews.length) % reviews.length;
    showPerson(currentItem);
});

randomBtn.addEventListener("click",()=>{
    currentItem=Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
