(function($) {

  var $slide = $(".slide");
  console.log("slide length:", $slide.eq(0).outerWidth());

  $(".team__slider").css({
    "width": $slide.length * $slide.eq(0).outerWidth(),
    "opacity": 1
  });

  Draggable.create(".team__slider", {
    bounds: $(".team__slider-container"),
    dragResistance: 0.4,
    throwProps: true,
    type: "x",
  });

})(jQuery);
