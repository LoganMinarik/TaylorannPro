(function () {
  // ============================================================
  // 🦝 RACCOON SOUNDBOARD — edit these lines to change what the
  // raccoon says when you hover over it (bottom-right corner)
  // ============================================================
  var raccoonLines = [
    "trash panda reporting for duty",
    "i am become raccoon, destroyer of garbage",
    "why is the garbage can locked",
    "i have 67 IQ and i use every point",
    "steal your food, steal your heart",
    "raccoon rights are human rights",
    "i was born in a dumpster and i will die in a dumpster",
    "you have been visited by the trash goblin",
    "my hobbies include digging and screaming",
    "raccoon power, activate",
    "give me your snacks or else",
    "i am baby",
    "this is fine. everything is fine.",
    "i am literally made of chaos",
    "67% chance i will bite you. 100% chance i will judge you.",
    "I serve cunt daily bitch",
    "67",
  ];

  // ============================================================
  // 🎯 SKILL "67" TTS — change the number below if you want
  // skills containing a different number to trigger speech
  // ============================================================
  var magicNumber = "67";


  // ─── TTS helper ─────────────────────────────────────────────
  function speak(text) {
    window.speechSynthesis.cancel();
    var utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1.2;
    utter.pitch = 1.5;
    window.speechSynthesis.speak(utter);
  }

  // ─── 67 SKILL HOVER ─────────────────────────────────────────
  document.querySelectorAll('.skill-item').forEach(function (el) {
    if (el.textContent.indexOf(magicNumber) !== -1) {
      el.addEventListener('mouseenter', function () {
        speak(magicNumber);
      });
    }
  });

  // ─── RACCOON HOVER TTS ──────────────────────────────────────
  var raccoon = document.getElementById('raccoon');
  if (raccoon) {
    raccoon.addEventListener('mouseenter', function () {
      var pick = raccoonLines[Math.floor(Math.random() * raccoonLines.length)];
      speak(pick);
    });
  }

  // ─── VISITOR COUNTER ────────────────────────────────────────
  let count = Math.floor(Math.random() * 90000000) + 10000000;
  setInterval(function () {
    count++;
    document.getElementById('visitorCount').textContent =
      String(count).padStart(8, '0');
  }, 500);

  // ─── CURSOR TRAIL ───────────────────────────────────────────
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

  // ─── RANDOM SKILL ROTATIONS ─────────────────────────────────
  document.querySelectorAll('.skill-item').forEach(function (el, i) {
    el.style.setProperty('--del', (i * 0.2) + 's');
    var rots = [-8, -5, -3, 0, 3, 5, 8, 10];
    el.style.setProperty('--rot', rots[Math.floor(Math.random() * rots.length)] + 'deg');
  });

  // ─── RANDOM PAGE JANK ───────────────────────────────────────
  setInterval(function () {
    document.querySelectorAll('.section').forEach(function (s) {
      s.style.transform = 'rotate(' + (Math.random() * 2 - 1) + 'deg)';
    });
  }, 3000);
})();
