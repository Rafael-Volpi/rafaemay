// Timer de relacionamento
function atualizarTimer() {
  const inicio = new Date('2025-05-14T11:30:00');
  const agora = new Date();
  let diff = agora - inicio;

  if (diff < 0) return;

  const segundosTotais = Math.floor(diff / 1000);

  const anos = Math.floor(segundosTotais / (365.25 * 24 * 60 * 60));
  const meses = Math.floor((segundosTotais % (365.25 * 24 * 60 * 60)) / (30.44 * 24 * 60 * 60));
  const dias = Math.floor((segundosTotais % (30.44 * 24 * 60 * 60)) / (24 * 60 * 60));
  const horas = Math.floor((segundosTotais % (24 * 60 * 60)) / (60 * 60));
  const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
  const segundos = segundosTotais % 60;

  let texto = "";

  if (anos >= 1) texto += `${anos} ano${anos > 1 ? "s" : ""}, `;
  if (meses >= 1) texto += `${meses} ${meses > 1 ? "meses" : "mês"}, `;
  if (dias >= 1) texto += `${dias} dia${dias > 1 ? "s" : ""}, `;

  texto += `${horas}h ${minutos}m ${segundos}s`;

  document.getElementById("timer").innerText = texto;
}


// Emojis românticos flutuando
function criarEmojiFlutuante() {
  const emojis = ['❤️', '💖', '💘', '💜', '💞', '😍', '😘'];
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  // Posicionar na lateral
  const lado = Math.random() < 0.5 ? 'left' : 'right';
emoji.style[lado] = `${Math.random() * 20 + 2}%`; // 2% a 22%
  emoji.style.bottom = '0';

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 4000);
}

// Ao clicar no botão inicial
document.getElementById('botao-inicial').addEventListener('click', () => {
  document.getElementById('inicio').style.display = 'none';
  const conteudo = document.getElementById('conteudo');
  conteudo.style.display = 'block';

  // Animar elementos
  document.querySelectorAll('.animar').forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.classList.remove('animar');
    }, i * 300);
  });

  // Iniciar o timer
  atualizarTimer();
  setInterval(atualizarTimer, 1000);

  // Iniciar emojis
  setInterval(criarEmojiFlutuante, 500);
});
