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

      backdrap: '<div class="dialog-backdrop" id="j-dialog-backdrop"></div>',

      animation: '',

      esc: true
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

      self.$context.find('.j-close').click(function () {
        self.close();
      });
    };

    self.close = function () {
      self.$backdrap.remove();
      self.$context.hide();
    };

    self.setup = function () {
      $('body').append(self.options.backdrap);

      self.$backdrap = $('#j-dialog-backdrop');

      self.$context.css({
        top: ( $(window).height() - self.$context.outerHeight() )/2,
        left: ( $(window).width() - self.$context.outerWidth() )/2
      });
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
