// Desafio 10 — Interação com JavaScript
// Ao clicar no botão "Clique aqui", exibe um alert de parabéns.

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btn-desafio');
    if (btn) {
        btn.addEventListener('click', function () {
            alert('Parabéns! Você concluiu o desafio!');
        });
    }
});