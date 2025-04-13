const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      aboutme_btn = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

aboutme_btn.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.percent'),
      lines = document.querySelectorAll('.progress__item__line_green');

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

const policyLink = document.querySelector('a[href="policy.html"]'); // Находим ссылку на политику конфиденциальности

policyLink.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке

    // Получаем контент из policy.html (см. объяснение ниже)
    fetch('policy.html')
        .then(response => response.text())
        .then(html => {
            // Используем Telegram Web Apps API для открытия popup
            Telegram.WebApp.showPopup({
                title: 'Политика конфиденциальности',
                message: html, // Используем HTML контент в качестве сообщения
                buttons: [
                    { type: 'default', text: 'Закрыть' } // Кнопка закрытия
                ]
            });
        })
        .catch(error => {
            console.error('Ошибка загрузки policy.html:', error);
            alert('Не удалось загрузить политику конфиденциальности.');
        });
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('http://localhost:8080/submit-form', { // Исправленный URL!
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Сообщение отправлено!');
            document.getElementById('myForm').reset();
        } else {
            alert('Ошибка отправки сообщения!');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке!');
    });
});


