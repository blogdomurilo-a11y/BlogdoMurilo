(function () {
  var raiz = document.documentElement;
  var botao = document.getElementById('tema');
  if (!botao) return;

  function temaAtual() {
    var salvo = raiz.getAttribute('data-theme');
    if (salvo) return salvo;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  botao.addEventListener('click', function () {
    var novo = temaAtual() === 'dark' ? 'light' : 'dark';
    raiz.setAttribute('data-theme', novo);
    try { localStorage.setItem('tema', novo); } catch (e) {}
  });
})();
