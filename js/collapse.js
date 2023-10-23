document.addEventListener("DOMContentLoaded", function () {
    const collapseButtons = document.querySelectorAll('[data-toggle="collapse"]');
    
    collapseButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const target = document.querySelector(button.getAttribute("data-target"));
            
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
