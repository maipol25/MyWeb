// script.js - 语言切换和交互功能
let currentLang = localStorage.getItem('selectedLang') || 'zh'; // 从localStorage读取，默认中文

function switchLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('selectedLang', currentLang); // 保存到localStorage
    const elements = document.querySelectorAll('[data-lang-' + currentLang + ']');
    elements.forEach(el => {
        el.innerHTML = el.getAttribute('data-lang-' + currentLang); // 修改为 innerHTML
    });
    // 更新按钮文本
    const button = document.getElementById('lang-toggle');
    if (button) {
        button.textContent = currentLang === 'zh' ? 'EN' : '中文';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 初始化AOS
    AOS.init();

    // 初始化语言
    const elements = document.querySelectorAll('[data-lang-' + currentLang + ']');
    elements.forEach(el => {
        el.innerHTML = el.getAttribute('data-lang-' + currentLang); // 修改为 innerHTML
    });
    const button = document.getElementById('lang-toggle');
    if (button) {
        button.textContent = currentLang === 'zh' ? 'EN' : '中文';
    }

    // 添加语言切换事件
    if (button) {
        button.addEventListener('click', switchLanguage);
    }
});

// 在script.js文件中添加以下函数
// function openImageModal(imageSrc) {  // 移除以避免冲突
//     const modalImage = document.getElementById('modalImage');
//     const modalTitle = document.getElementById('imageModalLabel');

//     modalImage.src = imageSrc;
//     modalTitle.textContent = '圖片預覽';

//     // 添加键盘支持
//     const modal = document.getElementById('imageModal');
//     modal.addEventListener('keydown', function (e) {
//         if (e.key === 'Escape') {
//             bootstrap.Modal.getInstance(modal).hide();
//         }
//     });
// }

// 为所有可点击图片添加键盘支持
document.addEventListener('DOMContentLoaded', function () {
    const clickableImages = document.querySelectorAll('.clickable-image');

    clickableImages.forEach(img => {
        img.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (typeof openImageModal === 'function') {
                    openImageModal(this.src);
                    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
                    modal.show();
                }
            }
        });

        // 添加焦点样式
        img.setAttribute('tabindex', '0');
        img.style.outline = 'none';

        img.addEventListener('focus', function () {
            this.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.5)';
        });

        img.addEventListener('blur', function () {
            this.style.boxShadow = '';
        });
    });
});

// 将模态框移动到 body 的直接子节点，避免父容器产生的 stacking context 覆盖模态框
document.addEventListener('DOMContentLoaded', function () {
    try {
        const imageModal = document.getElementById('imageModal');
        if (imageModal && imageModal.parentElement !== document.body) {
            document.body.appendChild(imageModal);
            console.log('imageModal moved to document.body to avoid stacking-context issues');
        }
    } catch (e) {
        console.error('Failed to move imageModal:', e);
    }
});

// 自动为导航栏设置 active 状态（根据当前页面 URL），不改变导航顺序
document.addEventListener('DOMContentLoaded', function () {
    try {
        const links = document.querySelectorAll('.navbar .nav-link');
        const path = window.location.pathname || '';
        let currentPage = path.substring(path.lastIndexOf('/') + 1);
        if (!currentPage) currentPage = 'index.html';

        links.forEach(link => {
            // 获取链接的文件名部分
            const href = link.getAttribute('href') || '';
            const linkPage = href.substring(href.lastIndexOf('/') + 1) || 'index.html';

            if (linkPage === currentPage) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    } catch (e) {
        console.error('Failed to set navbar active link:', e);
    }
});

 