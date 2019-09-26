$(window).load(function() {
  $('.custom-router-link').bind('click', function(e) {
    e.preventDefault();
    var path = $(this).attr('route-path') || '';
    window.location.replace(path);
  });
});
