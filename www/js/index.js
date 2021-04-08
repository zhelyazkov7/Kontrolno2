document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
	window.addEventListener("batterystatus", onBatteryStatus, false);
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function onBatteryStatus(status) {
    $("#batteryStatus").text(status.level);
    $("#isPlugged").text(status.isPlugged);
}
