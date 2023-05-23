const openMenuBtn = document.querySelector('.menu_btn')
const dropMenu = document.querySelector('.drop_menu')

openMenuBtn.onclick = function(){
	dropMenu.classList.toggle('vis')
	const isOpen = dropMenu.classList.contains('vis')

	openMenuBtn.classList = isOpen
	? 'menu_btn_x'
	: 'menu_btn'
}