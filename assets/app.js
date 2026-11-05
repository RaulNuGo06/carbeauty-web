/* La oferta de noviembre desaparece sola cuando termina */
if (Date.now() >= new Date('2026-11-11T00:00:00+01:00').getTime()) {
  document.querySelectorAll('[data-oferta]').forEach(el => el.remove());
}
