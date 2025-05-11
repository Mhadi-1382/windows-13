
const brandId = document.getElementById('brand');
const cardId = document.getElementById('card');
const textLoadingId = document.getElementById('textLoading');

window.addEventListener('load', function() {
	setTimeout(() => {
		brandId.classList.toggle('section-brand-style');
		cardId.classList.toggle('section-card-style');

		setTimeout(() => {
			textLoadingId.innerHTML = 'Preparing desktop...';
		}, 5000);
	}, 4000);
});
