document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btn-desafio');
    if (btn) {
        btn.addEventListener('click', function () {
            alert('Parabéns! Você concluiu o desafio!');
        });
    }
});