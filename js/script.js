(function () {
  // Visitor counter
  let count = Math.floor(Math.random() * 90000000) + 10000000;
  setInterval(function () {
    count++;
    document.getElementById('visitorCount').textContent =
      String(count).padStart(8, '0');
  }, 500);

  // Cursor trail
  document.addEventListener('mousemove', function (e) {
    var emojis = ['✦', '★', '🔥', '⚡', '💀', '🤘', '🎸', '⭐', '✧', '👾'];
    var colors = ['#ff00ff', '#00ffff', '#ffff00', '#ff0000', '#00ff00'];
    var el = document.createElement('div');
    el.className = 'cursor-trail';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = (e.clientX - 10) + 'px';
    el.style.top = (e.clientY - 10) + 'px';
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 1000);
  });

  // Random rotations on skill items
  document.querySelectorAll('.skill-item').forEach(function (el, i) {
    el.style.setProperty('--del', (i * 0.2) + 's');
    var rots = [-8, -5, -3, 0, 3, 5, 8, 10];
    el.style.setProperty('--rot', rots[Math.floor(Math.random() * rots.length)] + 'deg');
  });

  // Random page jank every 3s
  setInterval(function () {
    document.querySelectorAll('.section').forEach(function (s) {
      s.style.transform = 'rotate(' + (Math.random() * 2 - 1) + 'deg)';
    });
  }, 3000);
})();
