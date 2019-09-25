$(window).load(function() {
  layui.use('element', function() {
    var element = layui.element;
  });

  $('.custom-router-link').bind('click', function(e) {
    e.preventDefault();
    var path = $(this).attr('route-path') || '';
    window.location.replace(path);
  });
});
