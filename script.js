/* ===== DROPDOWN LOGIC ===== */
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu1 = dropdown.querySelector('.menu1');
    const options = dropdown.querySelectorAll('.menu1 li');
    const selected = dropdown.querySelector('.selected');

    if (!select || !menu1) return;

    select.addEventListener('click', (e) => {
        e.stopPropagation();
        select.classList.toggle('select-clicked');
        if (caret) caret.classList.toggle('caret-rotate');
        menu1.classList.toggle('menu1-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            if (selected) selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            if (caret) caret.classList.remove('caret-rotate');
            menu1.classList.remove('menu1-open');
            options.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
        });
    });
});

// Close dropdowns on outside click
document.addEventListener('click', () => {
    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu1 = dropdown.querySelector('.menu1');
        if (select) select.classList.remove('select-clicked');
        if (caret) caret.classList.remove('caret-rotate');
        if (menu1) menu1.classList.remove('menu1-open');
    });
});


/* ===== NAVBAR SCROLL EFFECT ===== */
const navbar = document.querySelector('.top-bar-menu');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});


/* ===== SCROLL FADE-IN ANIMATIONS ===== */
const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animateTargets = document.querySelectorAll(
    '.feature-card, .testimonial-card, .faq-item, .stay, .server2, .product1, .new, .vidieo, .cta-inner, .footer-inner'
);

animateTargets.forEach((el, i) => {
    el.classList.add('fade-up');
    // Stagger delay for cards in same row
    const delay = (i % 3) * 80;
    el.style.transitionDelay = `${delay}ms`;
    observer.observe(el);
});


/* ===== FAQ ACCORDION ===== */
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const isOpen = item.classList.contains('faq-open');
        // Close all
        faqItems.forEach(f => {
            f.classList.remove('faq-open');
            const plus = f.querySelector('.faq-plus');
            if (plus) plus.textContent = '+';
        });
        // Open clicked
        if (!isOpen) {
            item.classList.add('faq-open');
            const plus = item.querySelector('.faq-plus');
            if (plus) plus.textContent = '−';
        }
    });
});


/* ===== HERO TEXT ENTRANCE ===== */
window.addEventListener('DOMContentLoaded', () => {
    const heroEls = document.querySelectorAll('.w, .flow, .con, .web p, .get-select, .for-launch1');
    heroEls.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px)';
        el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
        el.style.transitionDelay = `${i * 100 + 100}ms`;
        requestAnimationFrame(() => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 50);
        });
    });

    // Animate section labels
    document.querySelectorAll('.feature-label').forEach((label, i) => {
        label.classList.add('fade-up');
        observer.observe(label);
    });
});


/* ===== CURSOR GLOW on orange button hover ===== */
document.querySelectorAll('.for-launch, .cta-btn, .for-launch1').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        btn.style.background = `radial-gradient(circle at ${x}% ${y}%, #ff7a40, #F56629)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.background = '';
    });
});
