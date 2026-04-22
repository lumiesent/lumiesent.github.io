document.addEventListener("DOMContentLoaded", () => {
    // === 1. TŁUMACZENIA (Słownik) ===
    const translations = {
        pl: {
            brand_name: "Patryk Czyżewski",
            job_title: "Ilustrator • Projektant UI/UX • Programista Front-end",
            bio: "Projektuję identyfikacje wizualne, strony internetowe, ilustracje i materiały do druku.",
            behance: "Behance",
            websites_menu: "Strony Internetowe",
            portfolio_menu: "Portfolio",
            contact: "Kontakt",
            
            // Nowe tytuły sekcji (Strona główna)
            websites_title: "Strony Internetowe",
            websites_subtitle: "Kompletne realizacje stron i aplikacji.",
            portfolio_title: "Portfolio",
            portfolio_subtitle: "Identyfikacje wizualne i opakowania.",
            
            // Projekty
            proj1_title: "Lunar Ceramics",
            proj1_desc: "Strona internetowa.",
            proj2_title: "Lunar Ceramics",
            proj2_desc: "Identyfikacja wizualna kawiarni oraz pracowni ceramiki.",
            
            talk_title: "Porozmawiajmy",
            talk_desc: "Stwórzmy razem coś wyjątkowego. Jeśli masz pomysł na projekt lub potrzebujesz wsparcia grafika – zapraszam do kontaktu.",
            
            // --- MOODBOARD / BEHANCE TŁUMACZENIA ---
            mb_back: "← Wróć do Portfolio",
            mb_behance_view: "Zobacz na Behance →",
            mb_subtitle: "Identyfikacja wizualna & Opakowania",
            mb_signet_title: "Sygnet",
            mb_signet_desc: "Chciałem by sygnet przedstawiał połączenie między kubkiem do kawy i wyrobem z gliny.",
            mb_brand_title: "Marka",
            mb_brand_desc: "Marka bazuje na usługach, w tym usłudze kawiarnianej.",
            mb_colors_title: "Kolorystyka",
            mb_colors_desc: "Zastosowałem ziemiste barwy, które nawiązują bezpośrednio do gliny i kawy.",

            // --- NOWE: NAWIGACJA STRONY PROJEKTU ---
            nav_back_websites: "← Wróć do Stron",
            nav_view_portfolio: "Zobacz w Portfolio →",

            // --- O MNIE ---
            about_menu: "O mnie",
            about_title: "O mnie",
            about_desc1: "Cześć! Jestem kreatywnym projektantem i deweloperem. Odpowiadam za cały proces tworzenia – od pierwszych szkiców i makiet, aż po ostateczne wdrożenie kodu. Projektuję spójne identyfikacje wizualne, użyteczne interfejsy oraz nowoczesne strony internetowe.",
            about_desc2: "Wierzę, że dobry design to nie tylko estetyka, ale przede wszystkim funkcjonalność i rozwiązywanie problemów. Zawsze staram się, aby moje projekty były intuicyjne, dostępne i po prostu cieszyły oko.",
            about_skills: "Umiejętności",
            skill_illustration: "Ilustracja",
        },
        en: {
            brand_name: "Patryk Czyżewski",
            job_title: "Illustrator • UI/UX Designer • Frontend Developer",
            bio: "I design visual identities, websites, illustrations, and print materials.",
            behance: "Behance",
            websites_menu: "Websites",
            portfolio_menu: "Portfolio",
            contact: "Contact",
            
            // Nowe tytuły sekcji (Strona główna)
            websites_title: "Websites",
            websites_subtitle: "Complete web developments and applications.",
            portfolio_title: "Portfolio",
            portfolio_subtitle: "Visual identities and packaging.",
            
            // Projekty
            proj1_title: "Lunar Ceramics",
            proj1_desc: "Website",
            proj2_title: "Lunar Ceramics",
            proj2_desc: "Visual identity for a cafe and ceramics workshop.",
            
            talk_title: "Let's Talk",
            talk_desc: "Let’s create something great together. If you have a project in mind or need a hand with design, I’m just a message away.",
            
            // --- MOODBOARD / BEHANCE TŁUMACZENIA ---
            mb_back: "← Back to Portfolio",
            mb_behance_view: "View on Behance →",
            mb_subtitle: "Visual Identity & Packaging",
            mb_signet_title: "Signet",
            mb_signet_desc: "I wanted the signet to represent the connection between a coffee cup and clay pottery.",
            mb_brand_title: "Brand",
            mb_brand_desc: "The brand is based on services, including a cafe service.",
            mb_colors_title: "Colors",
            mb_colors_desc: "I used earthy tones that directly relate to clay and coffee.",

            // --- NOWE: NAWIGACJA STRONY PROJEKTU ---
            nav_back_websites: "← Back to Websites",
            nav_view_portfolio: "View in Portfolio →",

            // --- O MNIE ---
            about_menu: "About",
            about_title: "About Me",
            about_desc1: "Hi! I am a creative designer and developer. I handle the entire creation process – from initial sketches and wireframes to final code implementation. I design cohesive visual identities, usable interfaces, and modern websites.",
            about_desc2: "I believe that good design is not just about aesthetics, but above all about functionality and problem-solving. I always strive to make my projects intuitive, accessible, and simply pleasing to the eye.",
            about_skills: "Skills",
            skill_illustration: "Illustration",
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
        
        // Zapis wyboru do pamięci przeglądarki
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
        // Opóźnienie ładowania hero dla lepszego efektu na start
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
    if (scrollArrow) { // Zabezpieczenie dla stron bez strzałki (np. podstron projektów)
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                scrollArrow.classList.add('hidden');
            } else {
                scrollArrow.classList.remove('hidden');
            }
        });
    }
});