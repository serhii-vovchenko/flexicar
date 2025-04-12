const openMenuBtn = document.querySelector('.header__burger-button');
const mobileMenu = document.querySelector('.header__mobile-menu-wrapper');

openMenuBtn.addEventListener('click', () => {
	if (mobileMenu.classList.contains('mobile-menu-active')) {
		mobileMenu.classList.remove('mobile-menu-active');
	} else {
		mobileMenu.classList.add('mobile-menu-active');
	}
});
