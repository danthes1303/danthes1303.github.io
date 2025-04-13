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

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const formData = new FormData(this); // Собираем данные формы
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('http://localhost:8080', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Указываем, что отправляем JSON
        },
        body: JSON.stringify(data) // Преобразуем данные в JSON
    })
    .then(response => {
        if (response.ok) {
            // Успешно отправлено
            alert('Сообщение отправлено!');
            document.getElementById('myForm').reset(); // Очищаем форму
        } else {
            // Ошибка
            alert('Ошибка отправки сообщения!');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке!');
    });
});