;(function ($) {
  $.extend($.fn, {
    cycleForward: function () {
      if (this.next().length > 0) {
        return this.next();
      } else {
        return this.siblings().first();
      }
    },

    cycleBackward: function () {
      if (this.prev().length > 0) {
        return this.prev();
      } else {
        return this.siblings().last();
      }
    }
  });
})(Zepto);
