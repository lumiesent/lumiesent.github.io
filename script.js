document.addEventListener("DOMContentLoaded", () => {
    // === 1. TŁUMACZENIA (Słownik) ===
    const translations = {
        pl: {
            brand_name: "Patryk Czyżewski",
            job_title: "Grafik | Ilustrator",
            bio: "Projektuję identyfikacje wizualne, ilustracje i materiały do druku. Inspiruje mnie natura, minimalizm i organiczne kształty.",
            behance: "Behance",
            see_portfolio: "Moje Portfolio",
            contact: "Kontakt",
            selected_projects: "Wybrane Projekty",
            proj1_title: "Branding Kawiarni",
            proj1_desc: "Identyfikacja wizualna i opakowania",
            proj2_title: "Plakaty Festiwalowe",
            proj2_desc: "Seria ilustracji na wydarzenie",
            proj3_title: "Aplikacja Mobilna",
            proj3_desc: "Projekt interfejsu (UI/UX)",
            proj4_title: "Logo Folio",
            proj4_desc: "Zbiór znaków z 2023 roku",
            talk_title: "Porozmawiajmy",
            talk_desc: "Masz pomysł na projekt lub szukasz grafika do współpracy? Śmiało, napisz do mnie!"
        },
        en: {
            brand_name: "Patryk Czyżewski",
            job_title: "Graphic Designer | Illustrator",
            bio: "I design visual identities, illustrations, and print materials. I am inspired by nature, minimalism, and organic shapes.",
            behance: "Behance",
            see_portfolio: "My Portfolio",
            contact: "Contact",
            selected_projects: "Selected Projects",
            proj1_title: "Cafe Branding",
            proj1_desc: "Visual identity and packaging",
            proj2_title: "Festival Posters",
            proj2_desc: "Event illustration series",
            proj3_title: "Mobile App",
            proj3_desc: "Interface design (UI/UX)",
            proj4_title: "Logo Folio",
            proj4_desc: "Collection of logos from 2023",
            talk_title: "Let's Talk",
            talk_desc: "Have a project idea or looking for a designer to collaborate with? Feel free to write to me!"
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
        
        // (Opcjonalnie) Zapisz wybór użytkownika w pamięci przeglądarki
        localStorage.setItem('preferredLanguage', lang);
    }

    // Podpięcie przycisków
    document.getElementById('lang-pl').addEventListener('click', () => setLanguage('pl'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    // Sprawdzenie czy użytkownik miał już zapisany język
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'pl';
    setLanguage(savedLanguage);


    // === 2. ISTNIEJĄCE ANIMACJE FADE-IN ===
    const containers = document.querySelectorAll('.fade-in');
    containers.forEach((container, index) => {
        setTimeout(() => {
            container.classList.add('visible');
        }, 150 + (index * 200)); 
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