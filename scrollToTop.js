/**
 * iOS overflow scrollToTop v0.1
 * https://github.com/prud/ios-overflow-scroll-to-top
 */

var scrollToTop = function(el) {

  el = typeof el === 'object' ? el : document.querySelector(el);
  if (!el) { return; }

  var offset = el.scrollTop;
  if (offset === 0) { return; }

  el.style.overflow = 'hidden'; // stops momentum scrolling
  var stepSize = offset / (offset < 1000 ?  15 : 30);

  var _animate = function() {

    el.scrollTop -= stepSize;

    if (el.scrollTop > 0) { // keep scrolling up
      setTimeout(_animate, 10);
    }
    else { // enough
      _onFinish();
    }
  };

  var _onFinish = function() {
    el.scrollTop = 0;
    el.style.overflow = null;
  };

  _animate();
};