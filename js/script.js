function toggleNav(element) {
  var x = document.getElementById(element);
  
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleContent(element, control, nav) {
  var x = document.getElementById(element);
  var y = document.getElementById(control);
  
  if (x.style.display === "block") {
	  if (!nav){
		  y.classList.toggle("active");
		  x.style.display = "none";
	  } 
  }
  else {
	y.classList.toggle("active");
    x.style.display = "block";
  }
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
	document.getElementById("hamburger").style.display = "none";
};