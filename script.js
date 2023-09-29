

// menangkap value dari user
const dateUser = document.querySelector('.submit-button');

const valueUser = document.querySelector('.input-keyword');
dateUser.addEventListener('click', function() {
    fetch('http://numbersapi.com/' + valueUser.value + '/year')
    .then(response => response.text())
    .then(response => {
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = response;
    })
});