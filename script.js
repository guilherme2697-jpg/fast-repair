/* Fast Repair — movimento da landing page (HTML/CSS/JS puro para Hostinger).
   Rolagem nativa (suave via CSS). GSAP/ScrollTrigger apenas para revelar
   seções ao entrar na tela. Sem smooth-scroll de biblioteca e sem parallax,
   para a rolagem ficar leve em qualquer aparelho. */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGSAP = window.gsap && window.ScrollTrigger;

  // Cabeçalho: fundo sólido ao rolar.
  var nav = document.querySelector('.nav');
  function onScroll() { if (nav) nav.classList.toggle('is-stuck', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menu mobile (hamburguer).
  var toggle = document.querySelector('.nav__toggle');
  if (toggle && nav) {
    function closeMenu() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    }
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    // Fecha ao clicar num link do menu.
    document.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    // Fecha com Esc.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
    // Fecha ao voltar para desktop.
    window.matchMedia('(min-width: 1025px)').addEventListener('change', function (e) {
      if (e.matches) closeMenu();
    });
  }

  // FAQ: abre e fecha (a animação de altura fica por conta do CSS via grid).
  document.querySelectorAll('.faq__item').forEach(function (item) {
    var q = item.querySelector('.faq__q');
    q.addEventListener('click', function () {
      var open = item.classList.contains('is-open');
      document.querySelectorAll('.faq__item').forEach(function (o) {
        o.classList.remove('is-open');
        o.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('is-open');
        q.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Sem animação (ou GSAP indisponível): mostra tudo. A rolagem/âncoras usam
  // o comportamento nativo do navegador (scroll-behavior + scroll-padding no CSS).
  if (reduce || !hasGSAP) {
    document.querySelectorAll('[data-reveal], [data-reveal-group] > *').forEach(function (el) {
      el.style.opacity = 1;
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Sutileza no carregamento do hero: apenas um leve zoom-out da imagem de
  // fundo. O conteúdo (título, botões) fica visível de imediato, sem depender
  // de animação — os CTAs nunca correm o risco de ficar invisíveis.
  var heroImg = document.querySelector('.hero__media img');
  if (heroImg) {
    gsap.from(heroImg, { scale: 1.08, duration: 1.4, ease: 'power2.out' });
  }

  // Reveal individual.
  gsap.utils.toArray('[data-reveal]').forEach(function (el) {
    gsap.from(el, { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%' } });
  });

  // Reveal em cascata dos filhos.
  gsap.utils.toArray('[data-reveal-group]').forEach(function (group) {
    gsap.from(group.children, { opacity: 0, y: 14, duration: 0.75, ease: 'power3.out',
      stagger: 0.08, scrollTrigger: { trigger: group, start: 'top 84%' } });
  });

  // Rede de segurança: se algum reveal for congelado/interrompido (aba em
  // segundo plano, render headless), força o estado final para que nada fique
  // invisível ou deslocado (evita cards passando por cima de textos vizinhos).
  setTimeout(function () {
    ScrollTrigger.getAll().forEach(function (st) {
      if (st.progress > 0 && st.animation && st.animation.progress() < 1) st.animation.progress(1);
    });
    ScrollTrigger.refresh();
  }, 1600);
})();
