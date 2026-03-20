// Tailwind Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "background": "#fff8f3",
                "on-primary-fixed-variant": "#535e54",
                "on-tertiary-fixed": "#3c2016",
                "surface-tint": "#566257",
                "outline-variant": "#c8ae88",
                "primary-dim": "#4a564c",
                "secondary-container": "#b7ebf7",
                "surface-container": "#ffebd0",
                "on-tertiary-container": "#543529",
                "surface-container-lowest": "#ffffff",
                "surface": "#fff8f3",
                "error": "#a83836",
                "inverse-surface": "#140d02",
                "primary-fixed-dim": "#cbd8cb",
                "on-background": "#403013",
                "error-dim": "#67040d",
                "secondary-fixed-dim": "#a9dde8",
                "on-primary-container": "#49554a",
                "surface-dim": "#f2d6ad",
                "tertiary-container": "#e6b7a6",
                "on-surface": "#403013",
                "on-error-container": "#6e0a12",
                "surface-variant": "#fadfb5",
                "surface-container-low": "#fff2e2",
                "on-primary-fixed": "#374238",
                "surface-container-high": "#fee5c0",
                "surface-bright": "#fff8f3",
                "on-error": "#fff7f6",
                "secondary": "#326670",
                "error-container": "#fa746f",
                "on-secondary-container": "#235962",
                "on-tertiary-fixed-variant": "#5e3d31",
                "outline": "#8d7755",
                "on-secondary-fixed": "#07464f",
                "on-secondary": "#edfcff",
                "inverse-on-surface": "#aa9b86",
                "on-primary": "#f0fcee",
                "tertiary-dim": "#6e4b3e",
                "inverse-primary": "#f0fdef",
                "tertiary-fixed": "#e6b7a6",
                "secondary-dim": "#245a64",
                "primary": "#566257",
                "on-secondary-fixed-variant": "#2e636c",
                "primary-container": "#d9e6d8",
                "on-tertiary": "#fff7f5",
                "secondary-fixed": "#b7ebf7",
                "primary-fixed": "#d9e6d8",
                "tertiary": "#7b5649",
                "on-surface-variant": "#705c3b",
                "tertiary-fixed-dim": "#d7a999",
                "surface-container-highest": "#fadfb5"
            },
            fontFamily: {
                "headline": ["Noto Serif"],
                "body": ["Manrope"],
                "label": ["Manrope"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
        },
    },
};

// AOS Initialization
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1200,
        easing: 'ease-in-out-cubic',
        once: true,
        mirror: false,
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('a');

    const toggleMenu = (show) => {
        if (show) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            document.body.style.overflow = '';
        }
    };

    if (menuBtn) {
        menuBtn.addEventListener('click', () => toggleMenu(true));
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => toggleMenu(false));
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });
});
