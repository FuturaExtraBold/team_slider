(function($) {

  var $slide = $(".slide");
  var $slider = $(".team__slider");
  var $defaultImage = $(".slide__image--1");
  var $hobbyImage = $(".slide__image--2");
  var $textContainer = $(".slide__text-container");

  // Slider
  TweenMax.set($slider, { width: $slide.length * $slide.eq(0).outerWidth(true), opacity: 0 });
  TweenMax.to($slider, 0.5, { opacity: 1 });

  // Slides
  for (var a = 0; a < $slide.length; a++) {
    TweenMax.from($slide.eq(a), 1, { x: 30, opacity: 0, delay: a * 0.15, ease: "easeOutExpo" });
  }

  function resetElements() {
    TweenMax.set($defaultImage, { opacity: 1 });
    TweenMax.set($hobbyImage, { opacity: 0 });
    TweenMax.set($textContainer, { y: 10, opacity: 0 });
  }

  function handleSlideMouseover(event) {
    resetElements();
    TweenMax.to($(event.currentTarget).find(".slide__image--1"), 0.2, { opacity: 0 });
    TweenMax.to($(event.currentTarget).find(".slide__image--2"), 0.2, { opacity: 1 });
    TweenMax.fromTo($(event.currentTarget).find(".slide__text-container"), 0.2, { y: 10, opacity: 0 }, { y: 0, opacity: 1 });
  }

  function handleSlideMouseout(event) {
    resetElements();
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
