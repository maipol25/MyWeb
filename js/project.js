/** project.html — card grid opens detail modal; image preview helper */
function openImageModal(imageSrc, caption) {
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('imageCaption');
    const modalTitle = document.getElementById('imageModalLabel');
    if (!modalImage) return;
    modalImage.src = imageSrc;
    if (modalCaption) modalCaption.textContent = caption || '';
    if (modalTitle) modalTitle.textContent = caption ? caption : '圖片預覽';
}

function openProjectDetail(detailId, titleHtml) {
    const source = document.getElementById(detailId);
    const detailBody = document.getElementById('projectDetailBody');
    const detailTitle = document.getElementById('projectDetailTitle');
  const detailModal = document.getElementById('projectDetailModal');
    if (!source || !detailBody || !detailModal) return;
    if (detailTitle && titleHtml) detailTitle.innerHTML = titleHtml;
    detailBody.innerHTML = source.innerHTML;
    bootstrap.Modal.getOrCreateInstance(detailModal).show();
}

document.addEventListener('DOMContentLoaded', function () {
    ['projectDetailModal', 'imageModal'].forEach(function (id) {
        const el = document.getElementById(id);
        if (el && el.parentElement !== document.body) document.body.appendChild(el);
    });

    document.querySelectorAll('.project-tile[data-detail-id]').forEach(function (tile) {
        const detailId = tile.getAttribute('data-detail-id');
        const titleEl = tile.querySelector('.project-tile-title');
        const activate = function () {
            openProjectDetail(detailId, titleEl ? titleEl.innerHTML : '');
        };
        tile.addEventListener('click', function (e) {
            if (e.target.closest('a')) return;
            activate();
        });
        tile.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activate();
            }
        });
    });
});