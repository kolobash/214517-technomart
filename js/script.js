var write = document.querySelector(".write-us");
var modal = document.querySelector(".modal-content");
var modalClose = document.querySelector(".modal-content-close");
var form = modal.querySelector("form");
var userName = modal.querySelector("[name=user-name]");
var email = modal.querySelector("[name=email]");
var comment = modal.querySelector("textarea");
var buy = document.querySelectorAll(".buy");
var popup = document.querySelectorAll(".pop-up");
var popClose = document.querySelectorAll(".pop-up-close");

if (buy){
	for (var i=0; i<buy.length; i++) {
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

if (write && modal) {
	write.addEventListener("click", function(event){
		event.preventDefault();
		modal.classList.add("modal-content-show");
		userName.focus();
	});

	form.addEventListener("submit", function(event) {
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

