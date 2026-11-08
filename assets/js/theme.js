// Light / dark mode switch (the moon / sun button in the header)
document.getElementById('theme-toggle').addEventListener('click', function () {
  var t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', t);
  try { localStorage.setItem('rct-theme', t); } catch (e) {}
});
