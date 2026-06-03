/* ========================  RENDER  ======================== */
let currentCat = 'all';
let openId = null;

function getFilteredPlugins() {
    const all = getPlugins();
    if (currentCat === 'all') return all;
    return all.filter(p => p.cat === currentCat);
}

function buildExpandHtml(p) {
    const textColor = (p.iconBg==='#fbbc04'||p.iconBg==='#61dafb') ? '#1a1a1a' : '#fff';
    return `
        <div class="expand-layout">
            <div class="expand-left">
                <div class="expand-left-top">
                    <div class="expand-icon" style="background:${p.iconBg};color:${textColor};">
                        <i class="${p.icon}"></i>
                    </div>
                    <h2 class="expand-title">${p.displayName}</h2>
                </div>
                <div class="expand-status-row" style="font-size:12px;color:var(--text-secondary);letter-spacing:0.5px;">${p.status}</div>
            </div>
            <div class="expand-right">
                <div class="expand-ministats" style="display:flex;gap:32px;margin-bottom:16px;">
                    <div>
                        <div style="font-size:10px;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">${t('modal.usersLabel')}</div>
                        <div style="font-size:16px;font-weight:600;">${p.users}</div>
                    </div>
                    <div>
                        <div style="font-size:10px;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">${t('modal.ratingLabel')}</div>
                        <div style="font-size:16px;font-weight:600;">${p.status}</div>
                    </div>
                    <div>
                        <div style="font-size:10px;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">${t('modal.reviewsLabel')}</div>
                        <div style="font-size:16px;font-weight:600;">${p.reviews}</div>
                    </div>
                </div>
                <p class="expand-desc">${p.desc}</p>
                <div class="expand-actions">
                    <a href="${p.status === '已入土' || p.status === 'Buried' ? 'grave.html?id=' + p.id : p.url}" ${p.status === '已入土' || p.status === 'Buried' ? '' : 'target="_blank"'} class="btn btn-primary">
                        <i class="fas fa-arrow-right" style="font-size:13px;"></i>
                        ${p.status === '已入土' || p.status === 'Buried' ? t('modal.visitGrave') : t('modal.visitStore')}
                    </a>
                </div>
            </div>
        </div>
    `;
}

function renderList() {
    const list = getFilteredPlugins();
    const container = document.getElementById('listContainer');
    const empty = document.getElementById('emptyState');
    const pluginList = document.getElementById('pluginList');

    if (list.length === 0) {
        container.innerHTML = '';
        pluginList.style.display = 'none';
        empty.style.display = 'block';
        return;
    }

    pluginList.style.display = 'block';
    empty.style.display = 'none';
    openId = null;

    container.innerHTML = list.map((p, i) => {
        const isLast = i === list.length - 1;
        return `
        <div class="list-item${isLast ? ' last-item' : ''}" onclick="toggleExpand(${p.id})" data-id="${p.id}">
            <div class="li-num">${String(i+1).padStart(2,'0')}</div>
            <div class="li-name">${p.displayName}</div>
            <div class="li-cat">${p.catLabel}</div>
            <div class="li-status" style="font-size:12px;color:var(--text-secondary);letter-spacing:0.5px;">${p.status}</div>
            <div class="li-users">${p.users}</div>
        </div>
        <div class="expand-panel" id="expand-${p.id}">
            <div class="expand-wrapper">
                <div class="expand-content">
                    ${buildExpandHtml(p)}
                </div>
            </div>
        </div>`;
    }).join('');
}

function toggleExpand(id) {
    const panel = document.getElementById('expand-' + id);
    const item = document.querySelector('.list-item[data-id="' + id + '"]');
    if (!panel) return;

    if (openId === id) {
        // collapse
        panel.classList.remove('open');
        item.classList.remove('active');
        openId = null;
    } else {
        // collapse previous
        if (openId !== null) {
            const prevPanel = document.getElementById('expand-' + openId);
            const prevItem = document.querySelector('.list-item[data-id="' + openId + '"]');
            if (prevPanel) prevPanel.classList.remove('open');
            if (prevItem) prevItem.classList.remove('active');
        }
        // expand new
        panel.classList.add('open');
        item.classList.add('active');
        openId = id;

        setTimeout(() => {
            const rect = panel.getBoundingClientRect();
            if (rect.bottom > window.innerHeight) {
                panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 100);
    }
}

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

