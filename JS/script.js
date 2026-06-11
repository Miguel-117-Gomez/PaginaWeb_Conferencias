
let currentLang = 'es';

function toggleLang() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.getElementById('lang-toggle').textContent = currentLang === 'es' ? 'EN' : 'ES';
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-es]').forEach(el => {
        
        const val = el.getAttribute('data-' + currentLang);
        if (!val) return;
        el.innerHTML = val;
    });
    document.title = currentLang === 'es'
        ? 'Experiencias & Eventos — Miguel Angel Gómez'
        : 'Experiences & Events — Miguel Angel Gómez';
}

function switchTab(id, btn) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('open');
}

function closeMenu() {
    document.getElementById('mobile-menu').classList.remove('open');
}


document.addEventListener('click', function (e) {
    const menu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('open');
    }
});


const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current
            ? 'rgba(255,255,255,0.9)' : '';
        a.style.background = a.getAttribute('href') === '#' + current
            ? 'rgba(255,255,255,0.07)' : '';
    });
});


function switchTab(id, btn) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    const panel = document.getElementById(id);
    panel.classList.add('active');
    btn.classList.add('active');
    // Load video source if not yet loaded
    const video = panel.querySelector('video');
    if (video) {
        const source = video.querySelector('source');
        if (source && source.dataset.src && !source.src.startsWith('data:')) {
            source.src = source.dataset.src;
            video.load();
        }
    }
}
