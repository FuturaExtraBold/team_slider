(function($) {

  var $slide = $(".slide");
  var $slider = $(".team__slider");
  var $image2, $image3, $slideText;

  // Slider
  TweenMax.set($slider, { width: $slide.length * $slide.eq(0).outerWidth(true), opacity: 0 });
  TweenMax.to($slider, 0.5, { opacity: 1 });

  // Slides
  for (var a = 0; a < $slide.length; a++) {
    TweenMax.from($slide.eq(a), 1, { x: 30, opacity: 0, delay: a * 0.15, ease: "easeOutExpo" });
  }

  function setActiveElements(target) {
    $image2 = $(target).find(".slide__image--2");
    $image3 = $(target).find(".slide__image--3");
    $slideText = $(target).find(".slide__text-container");
  }

  function handleSlideMouseover(event) {
    setActiveElements(event.currentTarget);
    TweenMax.to($image3, 0.2, { opacity: 1 });
    TweenMax.fromTo($slideText, 0.2, { y: 10, opacity: 0 }, { y: 0, opacity: 1 });
  }

  function handleSlideMouseout(event) {
    setActiveElements(event.currentTarget);
    TweenMax.set([$image2, $image3], { opacity: 0 });
    TweenMax.set($slideText, { y: 10, opacity: 0 });
  }

  $slide.on("mouseover", handleSlideMouseover);
  $slide.on("mouseout", handleSlideMouseout);

  Draggable.create(".team__slider", {
    bounds: $(".team__slider-container"),
    dragResistance: 0.2,
    throwProps: true,
    type: "x",
  });

})(jQuery);
