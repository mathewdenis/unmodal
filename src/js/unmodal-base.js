$(function () {
  $('#j-unmodal-base').unmodal({
    // fixed: true
    onShown: function (el) {
      el.find('.btn-ok').click(function () {
        alert('点击了确认按钮');
      });
    }
  });
});