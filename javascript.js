const codigoQRDiv = document.getElementById('codigo-qr');
const codigoQR = new QRCode(codigoQRDiv, {
  text: 'Texto......',
  width: 128,
  height: 128
});