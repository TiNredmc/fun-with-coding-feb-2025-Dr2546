$(document).ready(function() {
    // When the mouse enters a button with the class .btn
    $('.btn').hover(
        function() {
            // Add the 'enlarged' class to increase size
            $(this).addClass('enlarged');
        },
        function() {
            // Remove the 'enlarged' class to return to original size
            $(this).removeClass('enlarged');
        }
    );
});