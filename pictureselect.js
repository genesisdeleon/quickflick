// This is the javascript for pictureselect.html
$(document).ready(function() {
    var imageUrl = localStorage.getItem('image');
    $('#image').append('<img src="' + imageUrl + '">');
});
