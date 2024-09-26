// Массив данных (картинки, цитаты, авторы)
const slides = [
    {
        img: 'img/doordash.svg',
        quote: 'DoorDash went from a 100-person startup to over 9,000 employees. We needed a solution that was innovative in the T&E space.',
        author: '— Mike Kim, VP of Finance, DoorDash'
    },
    {
        img: 'img/scale.svg',
        quote: 'Scale revolutionized how companies deploy AI models. We needed a powerful platform for scaling operations globally.',
        author: '— Emily Zhao, Head of Machine Learning, Scale'
    },
    {
        img: 'img/deel.svg',
        quote: 'Deel helped us streamline our global hiring and payroll processes, making remote work more efficient.',
        author: '— Alex Smith, VP of People Operations, Deel'

    }
];

// Переменная для отслеживания текущего слайда
let currentSlide = 0;

// Получаем элементы HTML
const imgElement = document.getElementById('section5-img');
const quoteElement = document.getElementById('section5-quote');
const authorElement = document.getElementById('section5-author');

// Функция для обновления слайда
function updateSlide(index) {
    imgElement.src = slides[index].img;
    quoteElement.textContent = slides[index].quote;
    authorElement.textContent = slides[index].author;
}

// Обработчики событий для кнопок
document.getElementById('prevBtn').addEventListener('click', function() {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateSlide(currentSlide);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateSlide(currentSlide);
});

// Инициализация первого слайда
updateSlide(currentSlide);
