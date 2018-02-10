function doSlide (slider) {
  var id, o = slider.querySelectorAll("input.slide"), last = o.length-1, current = slider.querySelector("input.slide:checked");
  for (var i=0; i<o.length; i++) if (o[i] === current) {id = i; break;}
  o[id >= last ? 0 : id + 1].click();
}
function onSlide (e) {
  var o = e.target.parentNode;
  clearTimeout(o.autoslider);
  o.autoslider = setTimeout(function(){doSlide(o);}, 15e3);
}
$(function(){
  $(document).on("click", "input.slide", onSlide);
  $(".slider").each(function(){doSlide(this)});
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyBNznyn08Hp7R7V679waZ6XNxw30N-jaQk',
        events: {
            googleCalendarId: 'uao26r43e4nv5hdrhtfr11e3s0@group.calendar.google.com'
        }
    });
});
