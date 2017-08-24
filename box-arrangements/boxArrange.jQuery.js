jQuery.fn.BoxArrange = function (margin) {

  var element = this;
  var marginParam = margin ? parseInt(margin.margin) : 8;
  
  $(window).load(function() {
    applyArrangement();
    
    $(window).bind('resize', function() {
      applyArrangement();
    });

    function getInt (string) {
        if (typeof string == "undefined" || string == "")
            return 0;
        var tempInt = parseInt(string);

        if (!(tempInt <= 0 || tempInt > 0))
            return 0;
        return tempInt;
    }

    $(element).find('li').each(function(index, item){
      item.setAttribute('id', 'ele-'+index);
    });

    function applyArrangement () {
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var elementWidth = $(element).width();

      $(element).css({
        "position": "relative"
      });

      $(element).find('li').css({
        "position": "absolute"
      });

      var totalELementLen = $(element).find('li').length;
      var firstChildElement = $(element).find('li:first');
      var elePaddingLeftRight = getInt($(element).find('li:first').css('padding-left')) + getInt($(element).find('li:first').css('padding-right'));
      var elePaddingTopBottom = getInt($(element).find('li:first').css('padding-top')) + getInt($(element).find('li:first').css('padding-bottom'));
      var eleInOneRow = placedNumber = Math.floor(elementWidth / (firstChildElement.width() + elePaddingLeftRight + marginParam));
      var howMuchRow = Math.ceil(totalELementLen / eleInOneRow);
      var counter = 0;
      var coordinateTop = 0;
      var elsePart = false;

      $(element).find('li').each(function(index, item) {
        var elementCount = counter * 1;
        var currentWidth = item.clientWidth;
        var currentHeight = item.clientHeight;
        var coordinateLeft = elementCount * (currentWidth + marginParam);
        var newPositionTop = (placedNumber - eleInOneRow) + 1;

          if(counter < eleInOneRow) {
            $(item).css({
              "left": coordinateLeft,
              "top": elsePart ? $(element).find("li:nth-child("+ (newPositionTop) +")").height() + getInt($(element).find("li:nth-child("+ (newPositionTop) +")").css("top")) + elePaddingTopBottom + marginParam : coordinateTop
            });
            if(elsePart) {
              placedNumber++;
            }
            counter++;
          }else {
            counter = 0;
            $(item).css({
              "left": counter,
              "top": $(element).find("li:nth-child("+ (newPositionTop) +")").height() + getInt($(element).find("li:nth-child("+ (newPositionTop) +")").css("top")) + elePaddingTopBottom + marginParam
            });
            elsePart = true;
            counter++;
            placedNumber++;
          }
      });
    }
  });
};