const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const menuShoppingCart = document.querySelector('.product-detail');
const hamburguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');

const toggleDesktopMenu = () => {
	desktopMenu.classList.toggle('inactive');
};

const toggleMobileMenu = () => {
	const isMenuShoppingCartOpen =
		!menuShoppingCart.classList.contains('inactive');
	mobileMenu.classList.toggle('inactive');
	if (isMenuShoppingCartOpen) {
		menuShoppingCart.classList.add('inactive');
	}
};
const toggleShoppingCart = () => {
	const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
	menuShoppingCart.classList.toggle('inactive');
	if (isMobileMenuOpen) {
		mobileMenu.classList.add('inactive');
	}
};

const renderProducts = (productList) => {
	for (product of productList) {
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');

		const productImg = document.createElement('img');
		productImg.setAttribute('src', product.image);

		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');

		const productInfoDiv = document.createElement('div');

		const productPrice = document.createElement('p');
		productPrice.innerText = '$' + product.price;

		const productName = document.createElement('p');
		productName.innerText = product.name;

		productInfoDiv.append(productName, productPrice);

		const productInfoFigure = document.createElement('figure');
		const productImgCart = document.createElement('img');
		productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

		productInfoFigure.appendChild(productImgCart);

		productInfo.append(productInfoDiv, productInfoFigure);

		productCard.append(productImg, productInfo);

		cardsContainer.appendChild(productCard);
	}
};

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);

const productList = [];
productList.push({
	name: 'A Car',
	price: 120,
	image:
		'https://images.pexels.com/photos/5769387/pexels-photo-5769387.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
});
productList.push({
	name: 'A Car',
	price: 120,
	image:
		'https://images.pexels.com/photos/5769387/pexels-photo-5769387.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
});
productList.push({
	name: 'A Car',
	price: 120,
	image:
		'https://images.pexels.com/photos/5769387/pexels-photo-5769387.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
});

renderProducts(productList);
