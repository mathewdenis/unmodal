/**
 * Unmodal -- jQuery模态框插件
 * @version 0.0.1
 * @author hiwangchi@gmail.com
 * @homepage https://github.com/wangchi/unmodal
 */
'use strict';

(function ($) {

  if (!$) {
    return console.warn('Unmodal needs jQuery!');
  }

  $.Unmodal = function (context, options) {
    var self = this;

    self.defaults = {
      fixed: false,

      backdrap: '<div class="unmodal-backdrop" id="j-unmodal-backdrop"></div>',

      animation: '',

      esc: true,

      onShown: null,

      onClosed: null
    };

    self.options = {};

    self.$context = context;
    self.$backdrap = null;

    self.init = function (options) {
      self.options = $.extend({}, self.defaults, options);

      self.show();
    };

    self.show = function () {
      self.setup();

      self.$backdrap.show();

      self.$context.show();

      self.$context.find('.j-unmodal-close').click(function () {
        self.close();
      });

      self.onShown();
    };

    self.onShown = function () {
      if (typeof self.options.onShown === 'function') {
        self.options.onShown(self.$context);
      }
    };

    self.close = function () {
      self.$backdrap.remove();
      self.$context.hide();
    };

    self.onClosed = function () {
      if (typeof self.options.onClosed === 'function') {
        self.options.onClosed(self.$context);
      }
    };

    self.setup = function () {
      $('body').append(self.options.backdrap);

      self.$backdrap = $('#j-unmodal-backdrop');

      self.$context.css({
        top: ( $(window).height() - self.$context.outerHeight() )/2,
        left: ( $(window).width() - self.$context.outerWidth() )/2
      });

      if (self.options.fixed) {
        self.$context.css({
          position: 'fixed'
        });
      }
    };



    return self.init(options);
  };

  $.fn.unmodal = function (opts) {
    return this.each(function () {
      var $this = $(this);
      return $this.data('unmodal', new $.Unmodal($this, opts));
    });
  };

})(window.jQuery);
