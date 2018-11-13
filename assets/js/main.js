// Scroll down script ===================================
$(function() {
	$('.scroll-down').click (function() {
		$('html, body').animate({scrollTop: $('div.ok').offset().top }, 'slow');
		return false;
	});
});

// SideBar ===============================================
var sidebarToggle = document.getElementById("sidebar-toggle");

sidebarToggle.addEventListener("click", function() {
	document.body.classList.toggle("close");
});
$(document).ready(function(){
	hljs.initHighlightingOnLoad();
});


// Sticky Title =============================================
