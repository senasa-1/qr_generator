function generateQRCode() {
	const url = 'https://senasa-1.github.io/valid/index.html?';
	const c = 'c=' + document.getElementById('txt_cuve').value;
	const n = '&n=' + document.getElementById('txt_certificado').value;
	const p = '&p=' + document.getElementById('txt_ptr').value;
	const f = '&f=' + document.getElementById('txt_fecha').value;
    const text = url + c + n + p + f;
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ''; // Clear previous QR code
    new QRCode(qrcodeContainer, text);
}
