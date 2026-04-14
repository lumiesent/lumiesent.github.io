document.addEventListener("DOMContentLoaded", () => {
    // Pobierz główny kontener
    const container = document.querySelector('.fade-in');
    
    // Dodaj małe opóźnienie, aby animacja była płynniejsza
    setTimeout(() => {
        container.classList.add('visible');
    }, 150);
});