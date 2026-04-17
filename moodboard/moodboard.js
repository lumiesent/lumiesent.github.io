document.addEventListener("DOMContentLoaded", () => {
    // 1. TŁUMACZENIA DLA PROJEKTU (Przykładowe)
    const translations = {
        pl: {
            back: "← Wróć do Portfolio",
            intro_h: "Wstęp",
            intro_p: "Opis procesu projektowego i założeń."
        },
        en: {
            back: "← Back to Portfolio",
            intro_h: "Introduction",
            intro_p: "Design process and objectives description."
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        localStorage.setItem('preferredLanguage', lang);
    }

    const savedLanguage = localStorage.getItem('preferredLanguage') || 'pl';
    setLanguage(savedLanguage);

    // 2. POJAWIANIE SIĘ KARTY
    const card = document.querySelector('.card.fade-in');
    if (card) {
        setTimeout(() => {
            card.classList.add('visible');
        }, 150);
    }
});