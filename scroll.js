document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector("nav");
    var checkbox = document.getElementById("check");
    var menuItems = document.querySelectorAll("nav ul li a");

    // Add event listener to each menu item
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function () {
            // Uncheck the checkbox to close the menu
            checkbox.checked = false;
            // Check if the navbar needs to be transparent or colored
            if (window.scrollY === 0) {
                navbar.classList.remove("navbar-colored");
                navbar.classList.add("navbar-transparent");
            }
        });
    });

    // Your existing code for handling checkbox change and scroll events
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            navbar.classList.add("navbar-colored");
            navbar.classList.remove("navbar-transparent");
        } else {
            if (window.scrollY === 0) {
                navbar.classList.remove("navbar-colored");
                navbar.classList.add("navbar-transparent");
            }
        }
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            navbar.classList.add("navbar-shrink");
            navbar.classList.add("navbar-colored");
            navbar.classList.remove("navbar-transparent");
        } else {
            if (!checkbox.checked) {
                navbar.classList.remove("navbar-shrink");
                navbar.classList.remove("navbar-colored");
                navbar.classList.add("navbar-transparent");
            }
        }
    });
});
