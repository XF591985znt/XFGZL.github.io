// main.js - XF智能办公网站交互脚本

// 功能数据
const features = [
    {
        id: 1,
        title: "提示词综合体",
        description: "修改文字更换产品，智能优化提示词，提升生成效果",
        icon: "fas fa-keyboard",
        link: "https://www.runninghub.cn/ai-detail/2015717763146321922/",
        badge: "hot",
        badgeText: "热门"
    },
    {
        id: 2,
        title: "超级抠图",
        description: "一键去除背景，直出PNG格式，精准识别边缘",
        icon: "fas fa-cut",
        link: "https://www.runninghub.cn/ai-detail/1986238924643336193/",
        badge: "rec",
        badgeText: "推荐"
    },
    {
        id: 3,
        title: "图片去水印",
        description: "智能识别并去除图片中的水印，保持原图画质",
        icon: "fas fa-water",
        link: "https://www.runninghub.cn/ai-detail/2010880694590902274/",
        badge: "new",
        badgeText: "新品"
    },
    {
        id: 4,
        title: "平铺上身",
        description: "将白底图衣服一键穿上身，预览服装上身效果",
        icon: "fas fa-tshirt",
        link: "https://www.runninghub.cn/ai-detail/2015001206887813122/",
        badge: "",
        badgeText: ""
    },
    {
        id: 5,
        title: "文生图",
        description: "通过提示词生成高质量图片，创意设计专用工具",
        icon: "fas fa-paint-brush",
        link: "https://www.runninghub.cn/ai-detail/2015717228200599553/",
        badge: "hot",
        badgeText: "热门"
    },
    {
        id: 6,
        title: "扩图",
        description: "智能扩展图片边缘，上下左右扩展像素尺寸",
        icon: "fas fa-expand-alt",
        link: "https://www.runninghub.cn/ai-detail/2015722803193974785",
        badge: "",
        badgeText: ""
    },
    {
        id: 7,
        title: "洗图",
        description: "专业去除图片中的AI痕迹，使生成图更自然",
        icon: "fas fa-broom",
        link: "https://www.runninghub.cn/ai-detail/2008363662943195137/",
        badge: "",
        badgeText: ""
    },
    {
        id: 8,
        title: "详情页生成",
        description: "根据商品信息自动生成电商详情页，提升转化",
        icon: "fas fa-file-alt",
        link: "https://www.runninghub.cn/ai-detail/2015716503575863297/",
        badge: "new",
        badgeText: "新品"
    },
    {
        id: 9,
        title: "图生图",
        description: "基于原图生成新的变体，保留风格改变内容",
        icon: "fas fa-sync-alt",
        link: "https://www.runninghub.cn/ai-detail/2015716503575863297/",
        badge: "",
        badgeText: ""
    },
    {
        id: 10,
        title: "图片反推",
        description: "分析图片内容并反推生成提示词，便于复用",
        icon: "fas fa-search",
        link: "https://www.runninghub.cn/ai-detail/2001168045299167233/",
        badge: "",
        badgeText: ""
    },
    {
        id: 11,
        title: "上衣转平铺",
        description: "将实拍上衣图片转换为白底平铺图，适合电商",
        icon: "fas fa-vector-square",
        link: "https://www.runninghub.cn/ai-detail/2014625483857596417/",
        badge: "",
        badgeText: ""
    },
    {
        id: 12,
        title: "参考图生图",
        description: "根据参考图模板生成新的设计图，保持风格一致",
        icon: "fas fa-clone",
        link: "https://www.runninghub.cn/ai-detail/2014625483857596417/",
        badge: "rec",
        badgeText: "推荐"
    },
    {
        id: 13,
        title: "男女同框",
        description: "根据单人图片生成情侣合照，智能匹配姿态",
        icon: "fas fa-people-arrows",
        link: "https://www.runninghub.cn/ai-detail/2015614942526836738/",
        badge: "",
        badgeText: ""
    },
    {
        id: 14,
        title: "图片放大",
        description: "无损放大图片至4K高清分辨率，保持细节清晰",
        icon: "fas fa-search-plus",
        link: "https://www.runninghub.cn/ai-detail/2011252099568377858/",
        badge: "hot",
        badgeText: "热门"
    },
    {
        id: 15,
        title: "裤子转平铺",
        description: "将实拍裤子图片转换为白底平铺图，标准化展示",
        icon: "fas fa-hat-cowboy",
        link: "https://www.runninghub.cn/ai-detail/2014625636735787010/",
        badge: "",
        badgeText: ""
    }
];

// DOM元素
let featuresContainer;
let header;
let lastScrollTop = 0;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    featuresContainer = document.getElementById('features-container');
    header = document.querySelector('header');
    
    // 渲染功能卡片
    renderFeatures();
    
    // 添加滚动事件监听
    window.addEventListener('scroll', handleScroll);
    
    // 添加卡片点击效果
    setupCardInteractions();
    
    // 添加页面焦点变化效果
    setupPageFocusEffects();
    
    // 初始化动画观察器
    initAnimationObserver();
    
    // 添加搜索功能
    setupSearchFunctionality();
    
    // 添加返回顶部按钮
    createBackToTopButton();
});

// 渲染功能卡片
function renderFeatures() {
    if (!featuresContainer) return;
    
    featuresContainer.innerHTML = '';
    
    features.forEach(feature => {
        const card = createFeatureCard(feature);
        featuresContainer.appendChild(card);
    });
}

// 创建单个功能卡片
function createFeatureCard(feature) {
    const card = document.createElement('div');
    card.className = 'feature-card';
    card.dataset.id = feature.id;
    card.dataset.category = feature.badge || 'normal';
    
    // 确定徽章类
    let badgeClass = '';
    if (feature.badge === 'hot') badgeClass = 'badge-hot';
    else if (feature.badge === 'new') badgeClass = 'badge-new';
    else if (feature.badge === 'rec') badgeClass = 'badge-rec';
    
    card.innerHTML = `
        <div class="feature-icon">
            <i class="${feature.icon}"></i>
        </div>
        <h3 class="feature-title">${feature.title}</h3>
        <p class="feature-desc">${feature.description}</p>
        <a href="${feature.link}" target="_blank" class="feature-link" rel="noopener noreferrer">
            立即体验
            <i class="fas fa-arrow-right"></i>
        </a>
        ${feature.badge ? `<span class="feature-badge ${badgeClass}">${feature.badgeText}</span>` : ''}
    `;
    
    return card;
}

// 设置卡片交互
function setupCardInteractions() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        // 添加点击效果
        card.addEventListener('click', function(e) {
            // 如果不是点击链接本身，则触发链接点击
            if (!e.target.closest('.feature-link')) {
                const link = this.querySelector('.feature-link');
                if (link) {
                    // 添加点击反馈
                    this.classList.add('pulse-animation');
                    
                    // 短暂延迟后跳转
                    setTimeout(() => {
                        window.open(link.href, '_blank');
                        this.classList.remove('pulse-animation');
                    }, 300);
                }
            }
        });
        
        // 添加键盘导航支持
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('.feature-link');
                if (link) {
                    window.open(link.href, '_blank');
                }
            }
        });
        
        // 设置tabindex以便键盘导航
        card.setAttribute('tabindex', '0');
    });
}

// 处理滚动事件
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 控制头部显示/隐藏
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // 向下滚动且超过100px，隐藏头部
        header.style.transform = 'translateY(-100%)';
    } else {
        // 向上滚动或未超过100px，显示头部
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
    
    // 控制返回顶部按钮
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        if (scrollTop > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
}

// 设置页面焦点变化效果
function setupPageFocusEffects() {
    const originalTitle = document.title;
    let isBlurred = false;
    
    window.addEventListener('blur', function() {
        if (!isBlurred) {
            document.title = "✨ XF智能办公等你回来！";
            isBlurred = true;
        }
    });
    
    window.addEventListener('focus', function() {
        if (isBlurred) {
            document.title = originalTitle;
            isBlurred = false;
        }
    });
}

// 初始化动画观察器
function initAnimationObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
}

// 设置搜索功能
function setupSearchFunctionality() {
    // 创建搜索框
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.style.marginBottom = '30px';
    searchContainer.style.maxWidth = '500px';
    searchContainer.style.marginLeft = 'auto';
    searchContainer.style.marginRight = 'auto';
    
    searchContainer.innerHTML = `
        <div style="position: relative;">
            <input type="text" id="feature-search" placeholder="搜索AI功能..." 
                   style="width: 100%; padding: 12px 45px 12px 20px; 
                          border-radius: 25px; border: 1px solid var(--card-border); 
                          background: var(--card-bg); color: var(--text-primary);
                          font-size: 16px; outline: none; transition: all 0.3s;">
            <i class="fas fa-search" style="position: absolute; right: 20px; top: 50%; 
                transform: translateY(-50%); color: var(--text-muted);"></i>
        </div>
        <div id="search-results" style="margin-top: 10px; font-size: 14px; color: var(--text-muted);"></div>
    `;
    
    // 将搜索框插入到标题下方
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) {
        sectionTitle.parentNode.insertBefore(searchContainer, sectionTitle.nextSibling);
        
        // 添加搜索事件监听
        const searchInput = document.getElementById('feature-search');
        if (searchInput) {
            searchInput.addEventListener('input', debounce(handleSearch, 300));
        }
    }
}

// 处理搜索功能
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const resultsElement = document.getElementById('search-results');
    const allCards = document.querySelectorAll('.feature-card');
    
    if (!searchTerm) {
        // 显示所有卡片
        allCards.forEach(card => {
            card.style.display = 'flex';
        });
        resultsElement.textContent = '';
        return;
    }
    
    let matchCount = 0;
    
    allCards.forEach(card => {
        const title = card.querySelector('.feature-title').textContent.toLowerCase();
        const desc = card.querySelector('.feature-desc').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
            card.style.display = 'flex';
            matchCount++;
            
            // 添加高亮效果
            const titleElement = card.querySelector('.feature-title');
            const originalTitle = titleElement.textContent;
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            titleElement.innerHTML = originalTitle.replace(regex, '<mark style="background: rgba(59, 130, 246, 0.3);">$1</mark>');
        } else {
            card.style.display = 'none';
        }
    });
    
    resultsElement.textContent = `找到 ${matchCount} 个匹配的功能`;
    
    // 如果没有匹配项
    if (matchCount === 0) {
        resultsElement.innerHTML = `没有找到"${searchTerm}"相关功能，试试其他关键词`;
    }
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 创建返回顶部按钮
function createBackToTopButton() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.setAttribute('aria-label', '返回顶部');
    
    // 样式
    button.style.position = 'fixed';
    button.style.bottom = '30px';
    button.style.right = '30px';
    button.style.width = '50px';
    button.style.height = '50px';
    button.style.borderRadius = '50%';
    button.style.backgroundColor = 'var(--accent)';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.fontSize = '20px';
    button.style.cursor = 'pointer';
    button.style.opacity = '0';
    button.style.visibility = 'hidden';
    button.style.transform = 'translateY(20px)';
    button.style.transition = 'all 0.3s ease';
    button.style.zIndex = '99';
    button.style.boxShadow = 'var(--shadow-lg)';
    
    // 悬停效果
    button.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'var(--accent-hover)';
        this.style.transform = 'translateY(-5px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'var(--accent)';
        if (!this.classList.contains('visible')) {
            this.style.transform = 'translateY(20px)';
        } else {
            this.style.transform = 'translateY(0)';
        }
    });
    
    // 点击事件
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(button);
    
    // 添加可见性控制类
    const style = document.createElement('style');
    style.textContent = `
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// 添加窗口调整大小时的响应处理
window.addEventListener('resize', debounce(function() {
    // 可以添加响应式调整代码
}, 250));