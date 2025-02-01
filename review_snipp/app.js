const reviews = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'Web Developer',
        img: 'image1.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up."
    },
    {
        id: 2,
        name: 'Anna Johnson',
        job: 'Web Designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle.'
    },
    {
        id: 3,
        name: 'Peter Jones',
        job: 'Intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn.'
    },
    {
        id: 4,
        name: 'Bill Anderson',
        job: 'The Boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan.'
    },
];
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', loadInitialItem);

function loadInitialItem() {
    showPerson(currentItem);
}

function showPerson(index) {
    const { img: image, name, jobTitle, text } = reviews[index];
    img.src = image;
    author.textContent = name;
    job.textContent = jobTitle;
    info.textContent = text;
}

nextBtn.addEventListener('click', () => {
    currentItem = (currentItem + 1) % reviews.length;
    showPerson(currentItem);
});

prevBtn.addEventListener('click', () => {
    currentItem = (currentItem - 1 + reviews.length) % reviews.length;
    showPerson(currentItem);
});

randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
//The extraapp.js works with the json which is better for actual production
