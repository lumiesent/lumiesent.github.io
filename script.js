document.addEventListener("DOMContentLoaded", () => {
    // === 1. TŁUMACZENIA (Słownik) ===
    const translations = {
        pl: {
            design_menu: "Projekty",
            design_title: "Projekty",
            design_subtitle: "Proces, ilustracje i eksperymenty wizualne.",
            design_item1: "Zaprojektowanie identyfikacji wizualnej dla marki kawowej/ceramicznej.",
            brand_name: "Patryk Czyżewski",
            job_title: "Ilustrator, Grafik & Frontend Developer",
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
            talk_desc: "Stwórzmy razem coś wyjątkowego. Jeśli masz pomysł na projekt lub potrzebujesz wsparcia grafika – zapraszam do kontaktu."
        },
        en: {
            design_menu: "Projects",
            design_title: "Projects",
            design_subtitle: "Process, illustrations, and visual experiments.",
            design_item1: "Visual Identity for a Coffee/Ceramic Brand.",
            brand_name: "Patryk Czyżewski",
            job_title: "Illustrator, Graphic Designer & Frontend Developer",
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
            talk_desc: "Let’s create something great together. If you have a project in mind or need a hand with design, I’m just a message away."
        }
    };

    // Funkcja zmieniająca język
    function setLanguage(lang) {
        // Znajdź wszystkie elementy, które mają atrybut data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Zmień klasę aktywną dla flag
        document.getElementById('lang-pl').classList.toggle('active', lang === 'pl');
        document.getElementById('lang-en').classList.toggle('active', lang === 'en');
        
        // Zapisz wybór użytkownika w pamięci przeglądarki
        localStorage.setItem('preferredLanguage', lang);
    }

    // Podpięcie przycisków
    document.getElementById('lang-pl').addEventListener('click', () => setLanguage('pl'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    // Sprawdzenie czy użytkownik miał już zapisany język
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'pl';
    setLanguage(savedLanguage);

    // === 2. PŁYNNE POJAWIANIE SIĘ NA SCROLLU ===
    
    // Ożywiamy sekcję HERO od razu po załadowaniu strony
    const hero = document.querySelector('.hero.fade-in');
    if (hero) {
        // Opóźniamy minimalnie (100ms) wejście, by uzyskać kinowy efekt
        setTimeout(() => {
            hero.classList.add('visible');
        }, 100);
    }

    // Przygotowujemy wykrywacz scrolla dla reszty elementów
    const faders = document.querySelectorAll('.fade-in:not(.hero)');
    
    // Ustawienia: element ma się pojawić, gdy 15% jego wysokości wejdzie w ekran
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return; // Elementu jeszcze nie widać na ekranie
            } else {
                // Element się pojawił! Dodajemy klasę i wyłączamy nasłuchiwanie
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // Przypisujemy nasz wykrywacz do każdej karty/sekcji z klasą fade-in
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // === 3. OBSŁUGA ZNIKAJĄCEJ STRZAŁKI ===
    const scrollArrow = document.querySelector('.scroll-down');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            scrollArrow.classList.add('hidden');
        } else {
            scrollArrow.classList.remove('hidden');
        }
    });
});