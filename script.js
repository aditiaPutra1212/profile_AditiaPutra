document.addEventListener('DOMContentLoaded', function() {
    console.log('CV Aditia Putra Loaded!');

    // --- Navbar Toggle untuk Responsif ---
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarLinks = document.getElementById('navbarLinks');

    navbarToggle.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
        navbarToggle.classList.toggle('active'); // Untuk animasi burger menu
    });

    // Tutup navbar saat link diklik (untuk mobile)
    document.querySelectorAll('.navbar-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) { // Hanya untuk layar kecil
                navbarLinks.classList.remove('active');
                navbarToggle.classList.remove('active');
            }
        });
    });

    // --- Smooth Scroll untuk Navbar ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Mendapatkan ID target dari href
            const targetId = this.getAttribute('href');
            // Elemen target
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Menyesuaikan offset jika ada sticky navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20; // Tambahan offset 20px

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Animasi Fade-in dan Slide-up untuk Section saat Scroll (Efek Menarik) ---
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.1 // Ketika 10% dari section terlihat, trigger callback
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Berhenti mengamati setelah animasi dipicu
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Efek Parallax sederhana pada header (opsional) ---
    // Uncomment jika ingin efek parallax
    /*
    const heroSection = document.querySelector('.hero-section');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        heroSection.style.backgroundPositionY = -(scrolled * 0.3) + 'px'; // Sesuaikan kecepatan parallax
    });
    */
});