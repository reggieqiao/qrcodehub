chrome.tabs.getSelected(null, function(tab){
    var qrcode = document.getElementById('qrcode');
    var qr = new QRCodeStyling({
        width: 300,
        height: 300,
        data: tab.url,
        margin: 10
    });
    qr.append(qrcode);
});
  