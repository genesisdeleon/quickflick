// This is the javascript for index.html
$(document).ready(function() {
    // index.html
    $('#image-upload').click(uploadImage);
    
    // FirstPage.html
    var imageUrl = localStorage.getItem('image');
    $('#image').append('<img src="' + imageUrl + '">');
});

function uploadImage(event) {
    event.preventDefault();
    
    var imageUrl = $('#url').val();
    localStorage.setItem('image', imageUrl);
    window.location = 'pictureselect.html';
}