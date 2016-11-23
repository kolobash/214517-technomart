var write = document.querySelector(".write-us");
var modal = document.querySelector(".modal-content");
var modalClose = document.querySelector(".modal-content-close");
var buy = document.querySelectorAll(".buy");
var popup = document.querySelector(".pop-up");
var popClose = document.querySelectorAll(".pop-up-close");
var map = document.querySelector(".modal-map")
var mapUp = document.querySelector(".map")
var mapClose = document.querySelector(".map-close")

if (buy) {
	for (var i=0; i < buy.length; i++) {
		buy[i].addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.add("pop-up-show");
		});
	}
	for (var i=0; i<popClose.length; i++) {
		popClose[i].addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.remove("pop-up-show");
		});
	}

	window.addEventListener("keydown", function() {
		if (event.keyCode === 27) {
			if (popup.classList.contains("pop-up-show")) {
				popup.classList.remove("pop-up-show");
			}
		}
	})
}
if (modal) {
	var userName = modal.querySelector("[name=user-name]");
	var email = modal.querySelector("[name=email]");
	var comment = modal.querySelector("textarea");
	write.addEventListener("click", function(event){
		event.preventDefault();
		modal.classList.add("modal-content-show");
		userName.focus();
	});

	modal.addEventListener("submit", function(event) {
		if (!userName.value || !email.value || !comment){
			event.preventDefault();
			console.log("Заполните все поля формы!");
		}
	});

	modalClose.addEventListener("click", function(event){
		event.preventDefault();
		modal.classList.remove("modal-content-show");
	});

	window.addEventListener("keydown", function() {
		if (event.keyCode === 27) {
			if (modal.classList.contains("modal-content-show")) {
				modal.classList.remove("modal-content-show");
			}
		}
	});
}

map.addEventListener("click", function(event){
		event.preventDefault();
		mapUp.classList.add("map-show");
	});

mapClose.addEventListener("click", function(event){
		event.preventDefault();
		mapUp.classList.remove("map-show");
	});

window.addEventListener("keydown", function() {
		if (event.keyCode === 27) {
			if (mapUp.classList.contains("map-show")) {
				mapUp.classList.remove("map-show");
			}
		}
	});