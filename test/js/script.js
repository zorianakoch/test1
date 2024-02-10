// Отримуємо елемент pop-up та кнопку закриття
const popup = document.getElementById('popup');
const closeButton = document.querySelector('.close');

// Функція для відображення pop-up
function openPopup() {
    popup.style.display = 'block';
}

// Функція для приховування pop-up
function closePopup() {
    popup.style.display = 'none';
}

// Додамо обробник подій для кнопки закриття
closeButton.addEventListener('click', closePopup);

// Відображення pop-up (наприклад, після кліку на кнопку чи після певної події)
openPopup();


document.addEventListener('DOMContentLoaded', function () {
    var slider = document.querySelector('.slider');
    if (slider) {
        new Slick(slider, {
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
        });
    }
});
