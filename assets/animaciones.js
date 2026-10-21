/* =========================================================
   Animaciones de entrada — solo opacidad y transform.
   Sin librerías. Si este archivo no carga, el contenido
   queda visible (la clase .js-anim la agrega este mismo script).
   ========================================================= */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (!items.length) return;

  // Escalonar las tarjetas de una misma grilla
  document.querySelectorAll('.servicios, .pasos, .sectores').forEach(function (grupo) {
    grupo.querySelectorAll('[data-reveal]').forEach(function (el, i) {
      el.dataset.revealDelay = String(i * 70);
    });
  });

  if (reduce) {
    items.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  document.documentElement.classList.add('js-anim');

  function mostrar(el) {
    var delay = Number(el.dataset.revealDelay || 0);
    if (delay) setTimeout(function () { el.classList.add('visible'); }, delay);
    else el.classList.add('visible');
  }

  function revisar() {
    var limite = window.innerHeight * 0.92;
    for (var i = 0; i < items.length; i++) {
      var el = items[i];
      if (el.dataset.revelado) continue;
      var r = el.getBoundingClientRect();
      if (r.top < limite && r.bottom > 0) {
        el.dataset.revelado = '1';
        mostrar(el);
      }
    }
  }

  function alDesplazar() {
    if (esperando) return;
    esperando = true;
    setTimeout(function () { revisar(); esperando = false; }, 60);
  }
  var esperando = false;

  window.addEventListener('scroll', alDesplazar, { passive: true });
  window.addEventListener('resize', alDesplazar, { passive: true });
  window.addEventListener('load', revisar);

  // Respaldo: si el scroll no dispara eventos, estas revisecciones equally 
  setTimeout(revisar, 800);
  setTimeout(revisar, 2000);

  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function () { revisar(); }, { threshold: 0.05 });
    items.forEach(function (el) { obs.observe(el); });
  }

  revisar();
})();
