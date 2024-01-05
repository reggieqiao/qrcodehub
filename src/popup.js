chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var qrcode = document.getElementById('qrcode');
    var qr = new QRCodeStyling({
        width: 300,
        height: 300,
        data: tabs[0].url,
        margin: 10
    });
    qr.append(qrcode);
});