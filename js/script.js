const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    aboutme_btn = document.querySelector('.menu__list'),
    policy_btn = document.querySelector('.policy__btn');
policy = document.querySelector('#policy__id')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

aboutme_btn.addEventListener('click', () => {
    menu.classList.remove('active');
});

policy_btn.addEventListener('click', () => {
    policy.classList.toggle('show');
});

const percents = document.querySelectorAll('.percent'),
    lines = document.querySelectorAll('.progress__item__line_green');

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        'preset_id': 443,  // Укажите нужный preset_id
        'type': 'mysql',   // Укажите нужный тип базы данных
        'name': 'diplom',  // Установите имя базы данных как "diplom"
        'description': formData.get('description') || 'описание вашей базы данных' // Получите описание из формы, если оно есть
    };

    const url = 'https://api.timeweb.cloud/api/v1/databases';  // URL API

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjFrYnhacFJNQGJSI0tSbE1xS1lqIn0.eyJ1c2VyIjoid3k0MDU4MSIsInR5cGUiOiJhcGlfa2V5IiwiYXBpX2tleV9pZCI6IjBhNGIwM2RjLWI3ZmMtNGRmNC1iMDYwLTc0M2U5MjZjYjdmMCIsImlhdCI6MTc1MDExNzMyN30.kYyE_1oA2JaH2b69zRr6ct-fCaiZLrkW0-8-p_YhLp_V9ZqASUPkSPPg4-mNIHW-qNj5X37SgJFf2zTDSrZqFOEKhRRlKRam6Qtlrc0zBgs3G3W7WxBLHDG8KOvReAar6lW15vRmY8MFHHLVZaI9uuoJQVvh0i83Cxp3KYlA_j24p9RZ_hwOWUKCT4pIHAU0VSYBuBvnumEW4ARmWGXZ6WyLyLOTJE4s4ztsiwS6qIcDZ8QKobAu-qomKSf9eex9Yx2PdueQmNS2wJU9_nXqdIe25ww9WF-L4MRjp4JwVZxRb4Xk-dvFx_ix09uWEn_graBTsKiVTAPNyU5EvUjbLxj8nNWWOlTJqoKjkOxhYcHMmMz8wiHfNqvsk5iVQGDVPi-3rqe1IYknlxjChcaBgSnkm9dpPZVIJRGGIMUimuy_3IJgzxOi5pN8-kypNN4wrr8yrAaLEmN4bWMuxL0SeLrZkVqoHcsRhaonj0OoHqZZDjgdylQGrOjzqfdKd1Rm
    }`,  // Убедитесь, что токен установлен
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json(); // Parse the JSON response
            } else {
                return response.json().then(errorData => { // Parse error response
                    throw new Error(`Ошибка отправки сообщения! Status: ${response.status}, Details: ${JSON.stringify(errorData)}`);
                });
            }
        })
        .then(responseData => {
            console.log('Success:', responseData);  // Log the successful response
            alert('Сообщение отправлено!');
            document.getElementById('myForm').reset();
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке: ' + error.message);
        });
});

