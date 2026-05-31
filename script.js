(function () {
  // nav scroll state
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // mobile menu
  var menuBtn = document.getElementById('menuBtn');
  var navLinks = document.getElementById('navLinks');
  menuBtn.addEventListener('click', function () { navLinks.classList.toggle('open'); });
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { navLinks.classList.remove('open'); });
  });

  // reveal on scroll
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  function reveal() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for (var i = reveals.length - 1; i >= 0; i--) {
      var el = reveals[i];
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) {
        el.classList.add('in');
        reveals.splice(i, 1);
      }
    }
  }
  window.addEventListener('scroll', reveal, { passive: true });
  window.addEventListener('resize', reveal);
  reveal();
  requestAnimationFrame(reveal);
  setTimeout(function () {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }, 2200);

  // active nav link spy
  var spyIds = ['about', 'skills', 'projects', 'education', 'contact'];
  var links = {};
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var h = a.getAttribute('href');
    if (h && h.indexOf('#') === 0) links[h.slice(1)] = a;
  });
  function spy() {
    var pos = window.scrollY + window.innerHeight * 0.35;
    var current = null;
    spyIds.forEach(function (id) {
      var s = document.getElementById(id);
      if (s && s.offsetTop <= pos) current = id;
    });
    spyIds.forEach(function (id) { if (links[id]) links[id].classList.remove('active'); });
    if (current && links[current]) links[current].classList.add('active');
  }
  window.addEventListener('scroll', spy, { passive: true });
  spy();
})();
