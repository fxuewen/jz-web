$(window).load(function() {
  var path = window.location.pathname;
  var links = $('.custom-router-link');
  links.each(function() {
    if ($(this).attr('route-path') === path) {
      var parentNode = this.parentNode;

      if ($(parentNode).hasClass('layui-nav-item')) {
        $(parentNode).addClass('layui-this');
      } else {
        $(parentNode).addClass('layui-this');
        $(parentNode.parentNode.parentNode).addClass('layui-nav-itemed');
      }
    }
  });
  console.log('location', window.location);
  $('.custom-router-link').bind('click', function(e) {
    e.preventDefault();
    var path = $(this).attr('route-path') || '';
    window.location.replace(path);
  });

  var userInfo = JSON.parse(localStorage.getItem('userInfo'));
  $('#user-name').html(userInfo.userName);
});
