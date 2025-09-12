// 🎨 Fondo con p5.js
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-background");
  background(242, 234, 206);
}

function draw() {
  noFill();
  stroke(209, 171, 36, 80);
  strokeWeight(2);
  ellipse(mouseX, mouseY, 50, 50);

  // Detalle extra
  if (frameCount % 60 === 0) {
    stroke(139, 163, 33, 120);
    ellipse(random(width), random(height), random(20, 80));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// 🎵 Tone.js setup para futuro
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", async () => {
    await Tone.start(); // Activa contexto de audio
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
    alert(`Has dado click en: ${button.textContent}`);
  });
});
// --- INTERACCIÓN DE BOTONES VINILO ---
document.querySelectorAll(".vinilo").forEach(btn => {
  btn.addEventListener("click", async () => {
    // Tone.js necesita start() para activar audio en navegadores
    await Tone.start();

    // Crear un sintetizador básico
    const synth = new Tone.Synth().toDestination();

    // Reproducir un sonido breve al hacer clic
    synth.triggerAttackRelease("C4", "8n");

    // También mostrar un mensaje (puedes cambiarlo por abrir otra sección o modal)
    alert(`Proximamente: ${btn.textContent}`);
  });
});
////


  
