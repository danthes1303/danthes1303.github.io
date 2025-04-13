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


