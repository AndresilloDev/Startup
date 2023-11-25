document.addEventListener("DOMContentLoaded", function () {
    const views = document.querySelectorAll(".view");
    let currentIndex = 0;

    function showView(index) {
        views.forEach((view, i) => {
            view.style.display = i === index ? "block" : "none";
        });
    }

    function nextView() {
        currentIndex = (currentIndex + 1) % views.length;
        showView(currentIndex);
    }

    setInterval(nextView, 5000); // Cambia la vista cada 5 segundos
    showView(currentIndex); // Muestra la primera vista al cargar la página
});
