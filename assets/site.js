// Mobile navigation toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!open));
    toggle.setAttribute('aria-expanded', String(!open));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.setAttribute('data-open', 'false');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Assemble email links in the browser so no address appears in the page source.
// Markup: <a class="email" data-u="klang" data-d="umn.edu">Email</a>
// Add data-show="address" to also display the assembled address as the link text.
(function () {
  var at = String.fromCharCode(64); // avoid a literal "@" in this file too
  var nodes = document.querySelectorAll('.email');
  Array.prototype.forEach.call(nodes, function (el) {
    var u = el.getAttribute('data-u');
    var d = el.getAttribute('data-d');
    if (!u || !d) return;
    var addr = u + at + d;
    el.setAttribute('href', 'mailto:' + addr);
    el.setAttribute('rel', 'nofollow');
    if (el.getAttribute('data-show') === 'address') el.textContent = addr;
  });
})();
