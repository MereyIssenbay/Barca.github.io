document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the attribute 'data-toggle' set to 'collapse'.
    const collapseButtons = document.querySelectorAll('[data-toggle="collapse"]');
    
    // Iterate through each of the selected elements.
    collapseButtons.forEach(function(button) {
        // Add a click event listener to each element.
        button.addEventListener("click", function() {
            const target = document.querySelector(button.getAttribute("data-target"));
            
            // Check if the element exists.
            // If the target element has the 'show' class, remove it to hide the element. If no add it to display the element.
            if (target) {
                if (target.classList.contains("show")) {
                    target.classList.remove("show");
                } else {
                    target.classList.add("show");
                }
            }
        });
    });
});
