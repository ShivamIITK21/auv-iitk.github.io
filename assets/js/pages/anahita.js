// position of Nav bar 2 w.r.t screen size
var s1 = document.getElementById("stickyBar");
if (window.innerWidth > 856) {
  //for displaying icon on desktop and "HOME" on tabs
  s1.style.top = "58px";
} else {
  s1.style.top = "42px";
}
$(window).resize(function() {
  if (window.innerWidth > 856) {
    //for displaying icon on desktop and "HOME" on tabs
    s1.style.top = "58px";
  } else {
    s1.style.top = "42px";
  }
});
//smooth scroll for Nav bar 2
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - 80
    },
    500
  );
});
