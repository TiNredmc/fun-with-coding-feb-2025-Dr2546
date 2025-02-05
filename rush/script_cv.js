$(document).ready(function () {
    // Toggle dropdown on button click
    $('.nav-button').click(function (e) {
        e.stopPropagation(); // Prevent event from bubbling up
        $('.dropdown-menu').toggleClass('active');
    });

    // Close dropdown when clicking outside
    $(document).click(function () {
        $('.dropdown-menu').removeClass('active');
    });

    // Prevent dropdown from closing when clicking inside it
    $('.dropdown-menu').click(function (e) {
        e.stopPropagation();
    });

    $('ul li a').on('click', function(e) {
        // Get the target section's ID from the href attribute
        const targetId = $(this).attr('href');
        const targetSection = $(targetId);

        if (targetSection.length) {
            // Calculate the target section's position
            const targetPosition = targetSection.offset().top;

            // Smoothly scroll to the target section
            $('html, body').animate(
                {
                    scrollTop: targetPosition,
                },
                1000 // Animation duration in milliseconds (1 second)
            );
        }
    });
});

