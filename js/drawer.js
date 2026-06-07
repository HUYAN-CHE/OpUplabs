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

/* ========================  SHARED SIDEBAR/DRAWER  ======================== */

function renderSidebar() {
    const container = document.getElementById('sidebarContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="sidebar-drawer-wrapper">
            <div class="drawer" id="drawer">
                <div class="drawer-inner">
                    <div class="drawer-logo">UpLabs</div>
                    <nav class="drawer-nav">
                        <a href="index.html" id="drawerWork"><span class="drawer-link-num">01</span><span class="drawer-link-text">Product</span></a>
                        <a id="drawerConsulting"><span class="drawer-link-num">02</span><span class="drawer-link-text">Consulting</span></a>
                        <a id="drawerBrandDesign"><span class="drawer-link-num">03</span><span class="drawer-link-text">Brand Design</span></a>
                        <a id="drawerServices"><span class="drawer-link-num">04</span><span class="drawer-link-text">Services</span></a>
                        <a id="drawerAboutMe"><span class="drawer-link-num">05</span><span class="drawer-link-text">About Me</span></a>
                        <a href="contact.html" id="drawerContact"><span class="drawer-link-num">06</span><span class="drawer-link-text">Contact</span></a>
                    </nav>
                </div>
            </div>
            <aside class="sidebar">
                <div class="sidebar-logo">UpLabs</div>
                <div class="drawer-trigger" id="drawerTrigger">
                    <div class="trigger-bars">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="trigger-label" id="triggerLabel">Menu</div>
                </div>
                <div class="sidebar-bottom">
                    <div class="sidebar-icon mail-icon"><i class="fas fa-envelope" style="font-size:10px;"></i></div>
                    <div class="sidebar-icon scroll-top" id="scrollTop"><i class="fas fa-arrow-up" style="font-size:10px;"></i></div>
                </div>
            </aside>
        </div>
    `;

    // Bind events immediately after inserting
    const trigger = container.querySelector('#drawerTrigger');
    if (trigger) {
        trigger.addEventListener('click', toggleDrawer);
    }

    const mailIcon = container.querySelector('.sidebar-icon.mail-icon');
    if (mailIcon) {
        mailIcon.addEventListener('click', () => { window.location.href = 'mailto:hujian1653266185@gmail.com'; });
    }

    const scrollTopIcon = container.querySelector('.sidebar-icon.scroll-top');
    if (scrollTopIcon) {
        scrollTopIcon.addEventListener('click', scrollToTop);
    }

    // Drawer overlay click to close
    const overlay = document.querySelector('.drawer-overlay');
    if (overlay) {
        overlay.addEventListener('click', toggleDrawer);
    }
}

// Auto-render on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSidebar);
} else {
    renderSidebar();
}
