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
function openImageModal(imageSrc) {
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('imageModalLabel');

    modalImage.src = imageSrc;
    modalTitle.textContent = '圖片預覽';

    // 添加键盘支持
    const modal = document.getElementById('imageModal');
    modal.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            bootstrap.Modal.getInstance(modal).hide();
        }
    });
}

// 为所有可点击图片添加键盘支持
document.addEventListener('DOMContentLoaded', function () {
    const clickableImages = document.querySelectorAll('.clickable-image');

    clickableImages.forEach(img => {
        img.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openImageModal(this.src);
                const modal = new bootstrap.Modal(document.getElementById('imageModal'));
                modal.show();
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

 