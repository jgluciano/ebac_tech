AOS.init();

const dataDoEvento = new Date("Mar 12, 2024 19:00:00");
const timeStampEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteEvento = timeStampEvento - timeStampAtual;
  const diasMs = 1000 * 60 * 60 * 24;
  const horasMs = 1000 * 60 * 60;
  const minutosMs = 1000 * 60;

  const diasAteEvento = Math.floor(distanciaAteEvento / (diasMs));
  const horasAteEvento = Math.floor((distanciaAteEvento % diasMs) / (horasMs));
  const minutosAteEvento = Math.floor((distanciaAteEvento % horasMs) / (minutosMs));
  const segundosAteEvento = Math.floor((distanciaAteEvento % minutosMs) / 1000);

  document.getElementById('contador').innerHTML = `começa em: ${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

  if (distanciaAteEvento <= 0) {
    clearInterval(contaAsHoras);
    document.getElementById('contador').innerHTML = 'ja iniciou!'
  }

}, 1000);

