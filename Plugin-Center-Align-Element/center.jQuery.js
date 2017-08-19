jQuery.fn.AlignCenter = function() {

  var element = this;
  
  $(window).load(function() {
    changeCss();
    
    $(window).bind('resize', function() {
      changeCss();
    });

    function changeCss() {
      var eleHeight = $(element).height();
      var eleWidth = $(element).width();

      var windowWidth = $(window).width();
      var windowHeight = $(window).height();

      $(element).css({
        "position": "absolute",
        "left": windowWidth/2 - eleWidth/2,
        "top": windowHeight/2 - eleHeight/2
      });
    }
  });
};