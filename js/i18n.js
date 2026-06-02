/* ========================  I18N  ======================== */
const i18n = {
    zh: {
        topBarLeft: '向上求索-产品坟场',
        navWork: '产品', navConsulting: '咨询', navBrandDesign: '品牌设计', navServices: '服务', navAboutMe: '关于我', navContact: '联系',
        heroLabel: '向上求索-产品坟场',
        heroTitle: '为品牌与空间注入视觉灵魂的创意实践。',
        heroDesc: '跨越品牌识别、数字体验、产品设计与编辑出版的精选产品合集。每一个产品都是对视觉语言与情感传达的深度探索。',
        metaExtensions: '个产品', metaCategories: '个分类', metaAvg: '进行中',
        thNo: '序号', thName: '名称', thCat: '分类', thRating: '状态', thUsers: '年份',
        emptyTitle: '未找到产品', emptyDesc: '尝试其他分类',
        footerLeft: 'UpLabs — 2026', footerRight: '创意制作',
        triggerLabel: '菜单',
        floatNames: ['月影咖啡馆','东方瓷韵','城市漫游者'],
        floatDev1: '月影咖啡', floatDev2: '东方瓷艺', floatDev3: '城市实验室',
        cats: { all: '全部', brand: '品牌', digital: '数字', product: '产品', editorial: '编辑' },
        catLabels: {
            brand: '品牌设计', digital: '数字体验', product: '产品设计', editorial: '编辑设计'
        },
        secConsultingTitle: '咨询', secConsultingDesc: '为寻求清晰与方向的品牌提供战略性设计咨询。我们帮助你找到能与受众产生共鸣的视觉语言。',
        secBrandDesignTitle: '品牌设计', secBrandDesignDesc: '经得起时间考验的完整品牌识别系统。从标志到规范手册，我们打造连贯的视觉叙事。',
        secServicesTitle: '服务', secServicesDesc: '全谱系创意服务 — 数字体验、编辑设计、产品界面与空间品牌。',
        secAboutMeTitle: '关于我', secAboutMeDesc: '专注于视觉设计与情感传达交叉领域的独立创意实践者。base 上海，面向全球。',
        modal: {
            descLabel: '描述', catLabel: '分类',
            usersLabel: '年份', ratingLabel: '状态', reviewsLabel: '周期',
            visitStore: '查看产品', visitGrave: '进入墓地', close: '收起',
            free: '精选', chromeExt: '创意产品'
        }
    },
    en: {
        topBarLeft: 'Uplabs Product Boneyard',
        navWork: 'Product', navConsulting: 'Consulting', navBrandDesign: 'Brand Design', navServices: 'Services', navAboutMe: 'About Me', navContact: 'Contact',
        heroLabel: 'Uplabs Product Boneyard',
        heroTitle: 'Creative practices that infuse visual soul into brands and spaces.',
        heroDesc: 'A curated collection spanning brand identity, digital experience, product design, and editorial publishing. Each project is a deep exploration of visual language and emotional communication.',
        metaExtensions: 'Products', metaCategories: 'Categories', metaAvg: 'Active',
        thNo: 'No.', thName: 'Name', thCat: 'Category', thRating: 'Status', thUsers: 'Year',
        emptyTitle: 'No products found', emptyDesc: 'Try a different category',
        footerLeft: 'UpLabs — 2026', footerRight: 'Creative Production',
        triggerLabel: 'Menu',
        floatNames: ['Moonlit Café','Oriental Porcelain','Urban Wanderer'],
        floatDev1: 'Moonlit Coffee', floatDev2: 'Oriental Ceramics', floatDev3: 'Urban Lab',
        cats: { all: 'All', brand: 'Brand', digital: 'Digital', product: 'Product', editorial: 'Editorial' },
        catLabels: {
            brand: 'Brand Design', digital: 'Digital Experience', product: 'Product Design', editorial: 'Editorial Design'
        },
        secConsultingTitle: 'Consulting', secConsultingDesc: 'Strategic design consulting for brands seeking clarity and direction. We help you find the visual language that speaks to your audience.',
        secBrandDesignTitle: 'Brand Design', secBrandDesignDesc: 'Complete brand identity systems that endure. From logo to guidelines, we craft cohesive visual narratives.',
        secServicesTitle: 'Services', secServicesDesc: 'A full spectrum of creative services — digital experiences, editorial design, product interfaces, and spatial branding.',
        secAboutMeTitle: 'About Me', secAboutMeDesc: 'Independent creative practitioner focused on the intersection of visual design and emotional communication. Based in Shanghai, working globally.',
        modal: {
            descLabel: 'Description', catLabel: 'Category',
            usersLabel: 'Year', ratingLabel: 'Status', reviewsLabel: 'Duration',
            visitStore: 'View Product', visitGrave: 'Visit Grave', close: 'Collapse',
            free: 'Selected', chromeExt: 'Creative Product'
        }
    }
};

let lang = localStorage.getItem('uplabs_lang') || 'en';

function setLang(l) {
    lang = l;
    localStorage.setItem('uplabs_lang', l);
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === l);
    });
    applyI18n();
    renderList();
}

function t(key) {
    const keys = key.split('.');
    let val = i18n[lang];
    for (const k of keys) { if (val == null) return key; val = val[k]; }
    return val ?? key;
}

function applyI18n() {
    const ids = [
        'topBarLeft','navWork','navConsulting','navBrandDesign','navServices','navAboutMe','navContact',
        'secConsultingTitle','secConsultingDesc','secBrandDesignTitle','secBrandDesignDesc',
        'secServicesTitle','secServicesDesc','secAboutMeTitle','secAboutMeDesc',
        'heroLabel','heroTitle','heroDesc',
        'metaExtensions','metaCategories','metaAvg',
        'thNo','thName','thCat','thRating','thUsers',
        'emptyTitle','emptyDesc',
        'footerLeft','footerRight',
        'floatDev1','floatDev2','floatDev3'
    ];
    ids.forEach(id => { const el = document.getElementById(id); if (el) el.textContent = t(id); });

    ['floatName1','floatName2','floatName3'].forEach((id, i) => {
        const el = document.getElementById(id); if (el) el.textContent = t('floatNames')[i];
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.textContent = t('cats.' + item.dataset.cat);
    });

    const drawerIds = ['triggerLabel'];
    drawerIds.forEach(id => { const el = document.getElementById(id); if (el) el.textContent = t(id); });

    const drawerNavMap = [
        ['drawerWork','navWork'], ['drawerConsulting','navConsulting'],
        ['drawerBrandDesign','navBrandDesign'], ['drawerServices','navServices'],
        ['drawerAboutMe','navAboutMe'], ['drawerContact','navContact']
    ];
    drawerNavMap.forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el) {
            const textSpan = el.querySelector('.drawer-link-text');
            if (textSpan) textSpan.textContent = t(key);
            else el.textContent = t(key);
        }
    });
}

