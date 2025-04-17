document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn'); // Botones de filtro
    const projectCards = document.querySelectorAll('.project-card'); // Tarjetas de proyectos

    // Agregar evento de clic a cada botón de categoría
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Eliminar la clase 'active' de todos los botones
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active'); // Agregar la clase 'active' al botón seleccionado

            // Obtener la categoría seleccionada
            const selectedCategory = button.getAttribute('data-category');

            // Mostrar u ocultar proyectos según la categoría seleccionada
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.style.display = 'block'; // Mostrar el proyecto
                } else {
                    card.style.display = 'none'; // Ocultar el proyecto
                }
            });
        });
    });
});