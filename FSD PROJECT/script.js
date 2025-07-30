$(document).ready(function() {
    // Example interactive functionality
    $('.category-link').on('click', function(e) {
        alert('Navigating to ' + $(this).text() + ' section!');
    });
});