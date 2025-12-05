const size = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

function clean() {
    size.forEach(e => e.classList.remove('font-size_active'));
}

size.forEach(element => {
    element.addEventListener('click', event => {
        event.preventDefault();
        let dataSize = element.getAttribute('data-size');
        clean();
        element.classList.add('font-size_active');
        book.className = 'book';
        if (dataSize == 'big') {
            book.classList.add('book_fs-big');
        } else if (dataSize == 'small') {
            book.classList.add('book_fs-small');
        } 
    });
});