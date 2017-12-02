jQuery.fn.DiamondArrange = function (margin) {

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

    function getElementOuterWidth(eleWidth, padding) {
      return (eleWidth + padding);
    }

    $(element).find('li').each(function(index, item){
      item.setAttribute('id', 'ele-'+index);
    });

    function applyArrangement () {
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var parentWidth = $(element).width();
      var parentLeftOffset = $(element).offset().left;

      $(element).css({
        "position": "relative"
      });

      $(element).find('li').css({
        "position": "absolute"
      });

      var totalELementLen = $(element).find('li').length;
      var elePaddingLeftRight = getInt($(element).find('li:first').css('padding-left')) + getInt($(element).find('li:first').css('padding-right'));
      var elePaddingTopBottom = getInt($(element).find('li:first').css('padding-top')) + getInt($(element).find('li:first').css('padding-bottom'));
      var eleDiagonalLength = Math.floor(getElementOuterWidth($(element).find('li:first').width(), elePaddingLeftRight) * Math.sqrt(2)) + marginParam;
      var eleInOneRow = placedNumber = Math.round(parentWidth / eleDiagonalLength);
      var howMuchRow = Math.ceil(totalELementLen / eleInOneRow);
      var counter = 0;
      var prevEleCount = 0;
      var alerternateNum = true;
      var elementTopValue = 0;

      $(element).find('li').each(function(index, item) {
        var coordinateLeft;
        var coordinateTop = elementTopValue;
        if(alerternateNum) {
          coordinateLeft = counter * eleDiagonalLength;
          if(counter < eleInOneRow) {
            $(item).css({
              'left': coordinateLeft,
              'top': coordinateTop
            });
            counter++;
            prevEleCount++;
          }else {
            coordinateTop = (Math.round((($(element).find('li:nth-child('+prevEleCount+')').offset().top + eleDiagonalLength) - marginParam) / 2)) - 8;
            coordinateLeft = Math.round(eleDiagonalLength / 2);
            $(item).css({
              'left': coordinateLeft,
              'top': coordinateTop
            });
            alerternateNum = false;
            prevEleCount++;
            counter = 0;
            eleInOneRow = eleInOneRow - 2;
          }
        }else {
          coordinateTop = getInt($(element).find('li:nth-child('+prevEleCount+')')[0].style.top);
          coordinateLeft = Math.round(getInt($(element).find('li:nth-child('+prevEleCount+')')[0].style.left) + eleDiagonalLength); 
          if(counter < eleInOneRow) {
            $(item).css({
              'left': coordinateLeft,
              'top': coordinateTop
            });
            counter++; 
            prevEleCount++;
          }else {
            $(item).css({
              'left': 0,
              'top': getInt($(element).find('li:nth-child('+prevEleCount+')')[0].style.top) * 2
            });
            elementTopValue = getInt($(element).find('li:nth-child('+prevEleCount+')')[0].style.top) * 2;
            eleInOneRow = placedNumber;
            alertNateNum = true;
            counter = 1;
          }
        }
      });
    }
  });
};