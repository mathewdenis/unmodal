$(function () {

  // 基础对话框
  $('.j-unmodal-base').click(function () {

    $.unmodal({
      onShown: function (el) {
        el.find('.j-unmodal-ok').click(function () {
          el.close();
        });
      }
    });

  });

  // 没有尾部
  $('.j-unmodal-no-footer').click(function () {

    $.unmodal({
      title: '标题',
      footer: false,
      sContent: '这个没有尾部'
    });

  });

  // 没有头部
  $('.j-unmodal-no-header').click(function () {

    $.unmodal({
      header: false,
      sContent: '这个没有头部'
    });

  });


  // 添加事件
  $('.j-unmodal-event').click(function () {

    $.unmodal({
      onShown: function (el) {

        // click ok
        el.find('.j-unmodal-ok').click(function () {
          alert('click ok!');
        });

      },
      onClosed: function (el) {
        alert('closed!');
      }
    });

  });

});