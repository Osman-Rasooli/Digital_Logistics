

// EXECUTE afte page load

window.onload = function digital_fn() {
    let toggle = document.querySelector('.toggle-btn');
    let collapse = document.querySelector('.collapse');

    toggle.addEventListener('click', function() {
        console.log('hello')

        collapse.classList.toggle('active');
    })
}