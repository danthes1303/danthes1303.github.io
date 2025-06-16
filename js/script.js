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
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const url = 'http://38.180.114.178:8080/submit-form';  // URL API

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'  // Explicitly state what you expect back
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                // Improve error handling by logging the status code and text
                console.error(`HTTP error! Status: ${response.status}, Text: ${response.statusText}`);
                throw new Error(`HTTP error! Status: ${response.status}, Text: ${response.statusText}`); // Throw error to be caught in the catch block
            }
            return response.json(); // Or response.text() if the server returns plain text
        })
        .then(responseData => {
            // Process the response data from the server
            console.log('Success:', responseData); // Log successful response

            // Display a success message to the user
            alert('Сообщение отправлено!');

            // Reset the form
            document.getElementById('myForm').reset();
        })
        .catch(error => {
            console.error('Error:', error); // Log the full error for debugging

            // Display an error message to the user
            alert('Произошла ошибка при отправке: ' + error.message); // Provide more specific error information to the user
        });
});
