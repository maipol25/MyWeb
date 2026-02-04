// script.js - 语言切换和交互功能
let currentLang = localStorage.getItem('selectedLang') || 'zh'; // 从localStorage读取，默认中文

function switchLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('selectedLang', currentLang); // 保存到localStorage
    const elements = document.querySelectorAll('[data-lang-' + currentLang + ']');
    elements.forEach(el => {
        el.textContent = el.getAttribute('data-lang-' + currentLang);
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
        el.textContent = el.getAttribute('data-lang-' + currentLang);
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