const footerTitles = document.querySelectorAll(".footer-title");

footerTitles.forEach(title => {

    title.addEventListener("click", () => {

        const menu = title.nextElementSibling;

        menu.classList.toggle("show");

    });

});