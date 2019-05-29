(function($) {

  var $slide = $(".slide");
  var $slider = $(".team__slider");
  var $image2, $image3;

  // Slider
  TweenMax.set($slider, { width: $slide.length * $slide.eq(0).outerWidth(), opacity: 0 });
  TweenMax.to($slider, 0.5, { opacity: 1 });

  function handleSlideMouseover(event) {
    $image2 = $(event.currentTarget).find(".slide__image--2");
    $image3 = $(event.currentTarget).find(".slide__image--3");
    TweenMax.to($image3, 0.2, { opacity: 1 });
  }

  function handleSlideMouseout(event) {
    $image2 = $(event.currentTarget).find(".slide__image--2");
    $image3 = $(event.currentTarget).find(".slide__image--3");
    TweenMax.set([$image2, $image3], { opacity: 0 });
  }

  $slide.on("mouseover", handleSlideMouseover);
  $slide.on("mouseout", handleSlideMouseout);

  Draggable.create(".team__slider", {
    bounds: $(".team__slider-container"),
    dragResistance: 0.4,
    throwProps: true,
    type: "x",
  });

})(jQuery);
