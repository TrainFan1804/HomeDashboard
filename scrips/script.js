document.body.addEventListener('keydown', function(event) {
    if (event.key === '/') {
        event.preventDefault();
        document.getElementById('search-input').focus();
    }
});
