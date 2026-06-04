/* ========================  I18N  ======================== */
const i18n = {
    topBarLeft: { zh: '向上求索-产品坟场', en: 'Uplabs Product Boneyard' },
    navWork: { zh: '产品', en: 'Product' },
    navConsulting: { zh: '咨询', en: 'Consulting' },
    navBrandDesign: { zh: '品牌设计', en: 'Brand Design' },
    navServices: { zh: '服务', en: 'Services' },
    navAboutMe: { zh: '关于我', en: 'About Me' },
    navContact: { zh: '联系', en: 'Contact' },

    heroLabel: { zh: '实验。失败。发现。', en: 'Experiment. Fail. Discover.' },
    heroTitle: { zh: '每一次失败的实验，都是向用户真正需求迈进的一步。', en: 'Every failed experiment is a step toward what users truly need.' },
    heroDesc: { zh: '这里是废弃原型的安息之地，也是产品市场契合真相被发掘的地方。我们不惧怕失败；我们从中挖掘出有效的方法。', en: 'This is where abandoned prototypes rest — and where the truth about product-market fit is unearthed. We don\'t fear failure; we dig through it to find what works.' },

    metaExtensions: { zh: '个产品', en: 'Products' },
    metaCategories: { zh: '个分类', en: 'Categories' },
    metaAvg: { zh: '次探索', en: 'Experiments' },

    thNo: { zh: '序号', en: 'No.' },
    thName: { zh: '名称', en: 'Name' },
    thCat: { zh: '分类', en: 'Category' },
    thRating: { zh: '状态', en: 'Status' },
    thUsers: { zh: '年份', en: 'Year' },

    emptyTitle: { zh: '未找到产品', en: 'No products found' },
    emptyDesc: { zh: '尝试其他分类', en: 'Try a different category' },

    footerLeft: { zh: 'UpLabs — 2026', en: 'UpLabs — 2026' },
    footerRight: { zh: '持续实验', en: 'Continuous Experiment' },

    triggerLabel: { zh: '菜单', en: 'Menu' },

    floatDev1: { zh: '月影咖啡', en: 'Moonlit Coffee' },
    floatDev2: { zh: '东方瓷艺', en: 'Oriental Ceramics' },
    floatDev3: { zh: '城市实验室', en: 'Urban Lab' },

    secConsultingTitle: { zh: '咨询', en: 'Consulting' },
    secConsultingDesc: { zh: '为寻求清晰与方向的品牌提供战略性设计咨询。我们帮助你找到能与受众产生共鸣的视觉语言。', en: 'Strategic design consulting for brands seeking clarity and direction. We help you find the visual language that speaks to your audience.' },

    secBrandDesignTitle: { zh: '品牌设计', en: 'Brand Design' },
    secBrandDesignDesc: { zh: '经得起时间考验的完整品牌识别系统。从标志到规范手册，我们打造连贯的视觉叙事。', en: 'Complete brand identity systems that endure. From logo to guidelines, we craft cohesive visual narratives.' },

    secServicesTitle: { zh: '服务', en: 'Services' },
    secServicesDesc: { zh: '全谱系创意服务 — 数字体验、编辑设计、产品界面与空间品牌。', en: 'A full spectrum of creative services — digital experiences, editorial design, product interfaces, and spatial branding.' },

    secAboutMeTitle: { zh: '关于我', en: 'About Me' },
    secAboutMeDesc: { zh: '专注于视觉设计与情感传达交叉领域的独立创意实践者。base 上海，面向全球。', en: 'Independent creative practitioner focused on the intersection of visual design and emotional communication. Based in Shanghai, working globally.' }
};

const i18nArrays = {
    floatNames: { zh: ['月影咖啡馆','东方瓷韵','城市漫游者'], en: ['Moonlit Café','Oriental Porcelain','Urban Wanderer'] }
};

const i18nObjects = {
    cats: {
        zh: { all: '全部', brand: '品牌', digital: '数字', product: '产品', editorial: '编辑' },
        en: { all: 'All', brand: 'Brand', digital: 'Digital', product: 'Product', editorial: 'Editorial' }
    },
    catLabels: {
        zh: { brand: '品牌设计', digital: '数字体验', product: '产品设计', editorial: '编辑设计' },
        en: { brand: 'Brand Design', digital: 'Digital Experience', product: 'Product Design', editorial: 'Editorial Design' }
    },
    modal: {
        zh: {
            descLabel: '描述', catLabel: '分类',
            usersLabel: '年份', ratingLabel: '状态', reviewsLabel: '周期',
            visitStore: '查看产品', visitGrave: '进入墓地', close: '收起',
            free: '精选', chromeExt: '创意产品'
        },
        en: {
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

    // Check flat strings
    if (i18n[keys[0]]) {
        let val = i18n[keys[0]][lang];
        for (let i = 1; i < keys.length; i++) {
            if (val == null) return key;
            val = val[keys[i]];
        }
        return val ?? key;
    }

    // Check arrays
    if (i18nArrays[keys[0]]) {
        let val = i18nArrays[keys[0]][lang];
        for (let i = 1; i < keys.length; i++) {
            if (val == null) return key;
            val = val[keys[i]];
        }
        return val ?? key;
    }

    // Check nested objects
    if (i18nObjects[keys[0]]) {
        let val = i18nObjects[keys[0]][lang];
        for (let i = 1; i < keys.length; i++) {
            if (val == null) return key;
            val = val[keys[i]];
        }
        return val ?? key;
    }

    return key;
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
