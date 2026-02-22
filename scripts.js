document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btn-desafio');
    var overlay = document.getElementById('modal-overlay');
    var closeBtn = document.getElementById('modal-close');

    if (btn && overlay) {
        btn.addEventListener('click', function () {
            overlay.classList.add('open');
            overlay.setAttribute('aria-hidden', 'false');
        });
    }

    if (closeBtn && overlay) {
        closeBtn.addEventListener('click', function () {
            overlay.classList.remove('open');
            overlay.setAttribute('aria-hidden', 'true');
        });

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                overlay.classList.remove('open');
                overlay.setAttribute('aria-hidden', 'true');
            }
        });
    }
});