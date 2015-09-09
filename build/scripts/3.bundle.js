webpackJsonp([3],{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {

	// $('.nav__trigger').on('click', function(e){
	//      e.preventDefault();
	//      $(this).parent().toggleClass('nav--active');
	//    });
	// Reworked by CDH so that jQuery is not necessary.
	//
	//
	//
	//




		(function (window, document) {
		  var menuToggle = document.querySelector('#js-centered-navigation-mobile-menu');
		  var menuItems = document.querySelector("#js-centered-navigation-menu");
	  
	      menuItems.classList.remove('show');
		  if (menuItems.addEventListener) {
			  menuToggle.addEventListener('click', function(e) {
				  event.preventDefault ? event.preventDefault() : event.returnValue = false;
			  	  menuItems.classList.toggle('show');

			  });
		  }
		  else {
			  menuToggle.attachEvent("onclick", function(e) {
				  event.preventDefault ? event.preventDefault() : event.returnValue = false;
			  	  menuItems.classList.toggle('show');

			  });
		  }
		  
		})(this, this.document);}.call(window));

/***/ }

});