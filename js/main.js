/* ========================  EVENT BINDING  ======================== */

// Nav items (category filters)
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        currentCat = item.dataset.cat;
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        item.classList.add('active');
        renderList();
        scrollToList();
    });
});

// Drawer nav links
document.getElementById('drawerWork')?.addEventListener('click', toggleDrawer);
document.getElementById('drawerConsulting')?.addEventListener('click', () => { scrollToSection('consulting'); toggleDrawer(); });
document.getElementById('drawerBrandDesign')?.addEventListener('click', () => { scrollToSection('brandDesign'); toggleDrawer(); });
document.getElementById('drawerServices')?.addEventListener('click', () => { scrollToSection('services'); toggleDrawer(); });
document.getElementById('drawerAboutMe')?.addEventListener('click', () => { scrollToSection('aboutMe'); toggleDrawer(); });
document.getElementById('drawerContact')?.addEventListener('click', () => { scrollToSection('contact'); toggleDrawer(); });

// Sidebar elements
document.querySelector('.sidebar-logo')?.addEventListener('click', resetFilter);
document.querySelector('.drawer-trigger')?.addEventListener('click', toggleDrawer);
document.querySelector('.sidebar-icon.mail-icon')?.addEventListener('click', () => scrollToSection('contact'));
document.querySelector('.sidebar-icon.scroll-top')?.addEventListener('click', scrollToTop);

// Top bar
document.getElementById('navToggle')?.addEventListener('click', toggleMobileNav);
document.getElementById('navWork')?.addEventListener('click', scrollToList);
document.getElementById('navConsulting')?.addEventListener('click', () => scrollToSection('consulting'));
document.getElementById('navBrandDesign')?.addEventListener('click', () => scrollToSection('brandDesign'));
document.getElementById('navServices')?.addEventListener('click', () => scrollToSection('services'));
document.getElementById('navAboutMe')?.addEventListener('click', () => scrollToSection('aboutMe'));
document.getElementById('navContact')?.addEventListener('click', () => scrollToSection('contact'));

// Language toggle
document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// Drawer overlay
document.querySelector('.drawer-overlay')?.addEventListener('click', toggleDrawer);

/* ========================  INIT  ======================== */
setLang(lang);
