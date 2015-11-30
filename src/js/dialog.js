/**
 * Dialog -- dialog.js
 * 对话框样式
 * @author hiwangchi@gmail.com
 */

'use strict';
$(function () {

  function Dialog () {
    var args = arguments[0];
    if (typeof args !== 'object' || args.length === + args.length ) {
      alert('参数必须是JSON对象!');
    }
    this.options = args;
    this.el = $(args.el);
    this.backdrop = $('#j-dialog-backdrop');
  }

  Dialog.prototype = {
    show: function () {
      var self = this;
      var _el = self.el;

      self.setPosition();

      if (self.options.backdrop) {
        self.backdrop.show();
      }
      _el.show();

      _el.find('.j-close').click(function () {
        self.close();
      });
    },

    close: function () {
      this.el.hide();
      this.backdrop.hide();
    },

    setPosition: function () {
      var self = this;
      var _el = self.el;

      _el.css({
        top: ( $(window).height() - _el.outerHeight() )/2,
        left: ( $(window).width() - _el.outerWidth() )/2
      });
    }

  };

  window.Dialog = Dialog;

});