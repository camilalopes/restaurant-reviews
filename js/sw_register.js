if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('./sw.js')
		.then(function() {
			console.log('Service worker registered.');
		})
		.catch(function() {
			console.log('Service worker registration failed!');
		});
	});
}
