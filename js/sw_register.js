if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Service worker registered.');
	})
	.catch(function() {
		console.log('Service worker registration failed!');
	});
}
