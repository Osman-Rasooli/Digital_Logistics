

// EXECUTE afte page load

window.onload = function digital_fn() {
    let toggle = document.querySelector('.toggle-btn');
    let collapse = document.querySelector('.collapse');

    toggle.addEventListener('click', function() {
        console.log('hello')

        collapse.classList.toggle('active');
    })

    // MASONTY JS -> for gallery
    let grid = document.querySelector('.images-flex');
    let mansonry = new Masonry(grid, {
        itemSelector: '.images-flex-item',
        gutter: 100,
        fitWidth: true
    });

    // RELLAX JS
    let rellax = new Rellax('.rellax', {
        center: true
    });
}