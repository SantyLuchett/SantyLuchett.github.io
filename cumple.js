document.addEventListener('DOMContentLoaded', function() {
  const welcomeScreen = document.getElementById('welcomeScreen');
  const nameInput = document.getElementById('nameInput');
  const submitBtn = document.getElementById('submitBtn');
  const mainContent = document.getElementById('mainContent');
  const nameDisplay = document.getElementById('nameDisplay');
  const musicControl = document.getElementById('musicControl');
  const backgroundMusic = document.getElementById('backgroundMusic');
  const heartsContainer = document.getElementById('heartsContainer');
  const proposalButton = document.getElementById('proposalButton');

  // Crear corazones flotantes
  function createHearts() {
      for (let i = 0; i < 15; i++) {
          const heart = document.createElement('div');
          heart.classList.add('heart');
          heart.style.left = Math.random() * 100 + 'vw';
          heart.style.animationDuration = 5 + Math.random() * 10 + 's';
          heart.style.animationDelay = Math.random() * 5 + 's';
          heart.style.width = 10 + Math.random() * 20 + 'px';
          heart.style.height = heart.style.width;
          heartsContainer.appendChild(heart);
      }
  }

  // Crear confeti
  function createConfetti() {
      const colors = ['#ff6b81', '#ff9a9e', '#d23669', '#ff4757', '#ff7f50'];
      
      for (let i = 0; i < 100; i++) {
          const confetti = document.createElement('div');
          confetti.classList.add('confetti');
          confetti.style.left = Math.random() * 100 + 'vw';
          confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          confetti.style.width = 8 + Math.random() * 8 + 'px';
          confetti.style.height = confetti.style.width;
          confetti.style.animationDuration = 3 + Math.random() * 4 + 's';
          document.body.appendChild(confetti);
          
          // Eliminar el confeti después de la animación
          setTimeout(() => {
              confetti.remove();
          }, 7000);
      }
  }

  // Manejar el envío del nombre
  submitBtn.addEventListener('click', function() {
      const name = nameInput.value.trim();
      
      if (name) {
          nameDisplay.textContent = name;
          
          // Ocultar pantalla de bienvenida
          welcomeScreen.style.opacity = '0';
          
          setTimeout(() => {
              welcomeScreen.style.display = 'none';
              mainContent.style.opacity = '1';
              
              // Reproducir música
              backgroundMusic.volume = 0.3;
              backgroundMusic.play();
              
              // Crear corazones
              createHearts();
          }, 1000);
      } else {
          alert('Por favor, escribe tu nombre para continuar');
      }
  });

  // Permitir enviar con Enter
  nameInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          submitBtn.click();
      }
  });

  // Control de música
  let isMusicPlaying = false;
  musicControl.addEventListener('click', function() {
      if (isMusicPlaying) {
          backgroundMusic.pause();
          musicControl.innerHTML = '<span class="music-icon">♪</span>';
      } else {
          backgroundMusic.play();
          musicControl.innerHTML = '<span class="music-icon">♫</span>';
      }
      isMusicPlaying = !isMusicPlaying;
  });

  // Botón de propuesta
  proposalButton.addEventListener('click', function() {
      createConfetti();
      
      // Cambiar el texto del botón
      if (proposalButton.textContent === '¿Quieres casarte conmigo?') {
          proposalButton.textContent = '¡Sí, acepto!';
          proposalButton.style.background = 'linear-gradient(45deg, #4CAF50, #2E8B57)';
      } else {
          proposalButton.textContent = '¡Te amo!';
      }
  });
});
