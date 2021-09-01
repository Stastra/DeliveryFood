const cardButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

/*cardButton.addEventListener('click', function(event) {
	modal.classList.add("is-open");
});

close.addEventListener('click', function(event) {
	modal.classList.remove("is-open");
});*/

//Тоже самое, но короче(рефакторинг)
cardButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

function toggleModal() {
	modal.classList.toggle("is-open");
}

new WOW().init();