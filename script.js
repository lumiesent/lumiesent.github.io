document.addEventListener("DOMContentLoaded", () => {
    // === 1. TŁUMACZENIA (Słownik) ===
    const translations = {
        pl: {
            design_menu: "Projekty",
            design_title: "Projekty",
            design_subtitle: "Proces, ilustracje i eksperymenty wizualne.",
            design_item1: "Zaprojektowanie identyfikacji wizualnej dla marki kawowej/ceramicznej.",
            brand_name: "Patryk Czyżewski",
            job_title: "Ilustrator • Projektant UI/UX • Programista Front-end",
            bio: "Projektuję identyfikacje wizualne, strony internetowe, ilustracje i materiały do druku.",
            behance: "Behance",
            see_portfolio: "Moje Portfolio",
            contact: "Kontakt",
            selected_projects: "Portfolio",
            see_moodboard: "Zobacz Moodboard →",
            portfolio_subtitle: "Kompletne realizacje stron internetowych i identyfikacji wizualnych.",
            proj1_title: "Lunar Ceramics",
            proj1_desc: "Identyfikacja wizualna, strona internetowa i opakowania.",
            proj2_title: "Plakaty Festiwalowe",
            proj2_desc: "Seria ilustracji na wydarzenie",
            proj3_title: "Aplikacja Mobilna",
            proj3_desc: "Projekt interfejsu (UI/UX)",
            proj4_title: "Logo Folio",
            proj4_desc: "Zbiór znaków z 2023 roku",
            talk_title: "Porozmawiajmy",
            talk_desc: "Stwórzmy razem coś wyjątkowego. Jeśli masz pomysł na projekt lub potrzebujesz wsparcia grafika – zapraszam do kontaktu.",
            
            // --- MOODBOARD TŁUMACZENIA ---
            mb_back: "← Wróć do Portfolio",
            mb_subtitle: "Identyfikacja wizualna & Opakowania",
            mb_signet_title: "Sygnet",
            mb_signet_desc: "Chciałem by sygnet przedstawiał połączenie między kubkiem do kawy i wyrobem z gliny.",
            mb_brand_title: "Marka",
            mb_brand_desc: "Marka bazuje na usługach, w tym usłudze kawiarnianej.",
            mb_colors_title: "Kolorystyka",
            mb_colors_desc: "Zastosowałem ziemiste barwy, które nawiązują bezpośrednio do gliny i kawy."
        },
        en: {
            design_menu: "Projects",
            design_title: "Projects",
            design_subtitle: "Process, illustrations, and visual experiments.",
            design_item1: "Visual Identity for a Coffee/Ceramic Brand.",
            brand_name: "Patryk Czyżewski",
            job_title: "Illustrator • UI/UX Designer • Frontend Developer",
            bio: "I design visual identities, websites, illustrations, and print materials",
            behance: "Behance",
            see_portfolio: "My Portfolio",
            portfolio_subtitle: "Complete website implementations and visual identities.",
            contact: "Contact",
            selected_projects: "Portfolio",
            see_moodboard: "See Moodboard →",
            proj1_title: "Lunar Ceramics",
            proj1_desc: "Visual identity, website and packaging",
            proj2_title: "Festival Posters",
            proj2_desc: "Event illustration series",
            proj3_title: "Mobile App",
            proj3_desc: "Interface design (UI/UX)",
            proj4_title: "Logo Folio",
            proj4_desc: "Collection of logos from 2023",
            talk_title: "Let's Talk",
            talk_desc: "Let’s create something great together. If you have a project in mind or need a hand with design, I’m just a message away.",
            
            // --- MOODBOARD TŁUMACZENIA ---
            mb_back: "← Back to Portfolio",
            mb_subtitle: "Visual Identity & Packaging",
            mb_signet_title: "Signet",
            mb_signet_desc: "I wanted the signet to represent the connection between a coffee cup and clay pottery.",
            mb_brand_title: "Brand",
            mb_brand_desc: "The brand is based on services, including a cafe service.",
            mb_colors_title: "Colors",
            mb_colors_desc: "I used earthy tones that directly relate to clay and coffee."
        }
    };

    // Funkcja zmieniająca język
    function setLanguage(lang) {
        // Podmiana tekstów
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Bezpieczna zmiana flag (tylko na głównej stronie gdzie istnieją przyciski)
        const btnPl = document.getElementById('lang-pl');
        const btnEn = document.getElementById('lang-en');
        if (btnPl && btnEn) {
            btnPl.classList.toggle('active', lang === 'pl');
            btnEn.classList.toggle('active', lang === 'en');
        }
        
        // Zapis wyboru
        localStorage.setItem('preferredLanguage', lang);
    }

    // Podpięcie przycisków (tylko jeśli istnieją w dokumencie)
    const btnPl = document.getElementById('lang-pl');
    const btnEn = document.getElementById('lang-en');
    if (btnPl) btnPl.addEventListener('click', () => setLanguage('pl'));
    if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));

    // Ustawienie początkowego języka
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'pl';
    setLanguage(savedLanguage);

    // === 2. PŁYNNE POJAWIANIE SIĘ NA SCROLLU ===
    const hero = document.querySelector('.hero.fade-in');
    if (hero) {
        setTimeout(() => { hero.classList.add('visible'); }, 100);
    }

    const faders = document.querySelectorAll('.fade-in:not(.hero)');
    const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => { appearOnScroll.observe(fader); });

    // === 3. OBSŁUGA ZNIKAJĄCEJ STRZAŁKI ===
    const scrollArrow = document.querySelector('.scroll-down');
    if (scrollArrow) { // Zabezpieczenie dla stron bez strzałki
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                scrollArrow.classList.add('hidden');
            } else {
                scrollArrow.classList.remove('hidden');
            }
        });
    }
});