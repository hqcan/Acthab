// 主要JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
    initializeMobileMenu();
});

// 语言切换功能
function switchLanguage() {
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop();
    
    if (currentFile === 'index.html' || currentFile === '') {
        window.location.href = 'index-en.html';
    } else if (currentFile === 'index-en.html') {
        window.location.href = 'index.html';
    } else if (currentFile.includes('-en.html')) {
        // 从英文页面切换到中文页面
        const chinesePage = currentFile.replace('-en.html', '.html');
        window.location.href = chinesePage;
    } else if (currentFile.includes('.html')) {
        // 从中文页面切换到英文页面
        const englishPage = currentFile.replace('.html', '-en.html');
        window.location.href = englishPage;
    }
}

// 导航栏功能
function initializeNavigation() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    // 滚动时导航栏效果
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        // 向下滚动时隐藏导航栏，向上滚动时显示
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 移动端菜单功能
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    navLinks.classList.toggle('mobile-active');
    menuToggle.classList.toggle('active');
    
    // 阻止背景滚动
    if (navLinks.classList.contains('mobile-active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function initializeMobileMenu() {
    // 添加移动端菜单样式
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 70px;
                left: 0;
                right: 0;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(20px);
                flex-direction: column;
                padding: 2rem;
                gap: 1.5rem;
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
            
            .nav-links.mobile-active {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
                display: flex;
            }
            
            .mobile-menu-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .mobile-menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        }
    `;
    document.head.appendChild(style);
}

// 滚动效果
function initializeScrollEffects() {
    // 创建Intersection Observer用于动画触发
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    document.querySelectorAll('.feature-card, .pricing-card, .section-header').forEach(el => {
        observer.observe(el);
    });
}

// 初始化动画
function initializeAnimations() {
    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        .feature-card,
        .pricing-card,
        .section-header {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .feature-card.animate-in,
        .pricing-card.animate-in,
        .section-header.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .feature-card:nth-child(even).animate-in {
            animation: slideInRight 0.6s ease-out;
        }
        
        .feature-card:nth-child(odd).animate-in {
            animation: slideInLeft 0.6s ease-out;
        }
        
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .hero-content {
            animation: fadeInUp 1s ease-out;
        }
        
        .hero-image {
            animation: fadeInRight 1s ease-out 0.3s both;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// 工具函数
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

// 性能优化：防抖滚动事件
const debouncedScroll = debounce(() => {
    // 滚动相关的性能敏感操作
}, 16);

window.addEventListener('scroll', debouncedScroll);

// 错误处理
window.addEventListener('error', function(e) {
    console.error('JavaScript错误:', e.error);
});

// 页面加载完成后的额外初始化
window.addEventListener('load', function() {
    // 预加载关键资源
    const preloadLinks = [
        'assets/css/style.css',
        'assets/images/logo.png'
    ];
    
    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = href.endsWith('.css') ? 'style' : 'image';
        document.head.appendChild(link);
    });
});

// 导出函数供全局使用
window.switchLanguage = switchLanguage;
window.toggleMobileMenu = toggleMobileMenu;
