function resetFilter() {
    currentCat = 'all';
    document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.cat === 'all'));
    renderList();
}

function toggleMobileNav() {
    document.getElementById('topBarRight').classList.toggle('open');
}

function closeMobileNav() {
    if (window.innerWidth <= 767) {
        document.getElementById('topBarRight').classList.remove('open');
    }
}

function toggleDrawer() {
    document.body.classList.toggle('drawer-open');
}

function closeDrawer() {
    document.body.classList.remove('drawer-open');
}

function scrollToList() {
    document.getElementById('pluginList').scrollIntoView({ behavior: 'smooth' });
    closeMobileNav();
}

function scrollToTop() {
    if (document.body.classList.contains('drawer-open')) {
        toggleDrawer();
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMobileNav();
}
