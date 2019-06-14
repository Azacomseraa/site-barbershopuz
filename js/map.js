 var maplink = document.querySelector(".contact-button-map");
        var mapPopup = document.querySelector(".modal-map");
        var mapclose = mapPopup.querySelector(".modal-close");

        maplink.addEventListener("click", function(evt) {
        	evt.preventDefault();
        	mapPopup.classList.add("modal-show");
        })

        mapclose.addEventListener("click", function(evt){
        	evt.preventDefault();
        	mapPopup.classList.remove("modal-show");
        })