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
      sContent: '随便写一些内容，用于测试事件，可以对内容里面的元素添加事件<br><button class="j-test-event">点下试试!</button>',
      onShown: function (el) {

        // click ok
        el.find('.j-unmodal-ok').click(function () {
          alert('click ok!');
        });

        // 弹窗内元素添加事件
        el.find('.j-test-event').click(function () {
          alert('干得不错!');
        });

      },
      onClosed: function (el) {
        alert('closed!');
      }
    });

  });


  // 自定义按钮文字
  $('.j-unmodal-btn-text').click(function () {
    $.unmodal({
      title: '自定义按钮文字',
      btnOkText: '按钮文字一',
      btnCancelText: '按钮文字二'
    });
  });

  // 内容包含html，可以
  $('.j-unmodal-include-html').click(function () {
    $.unmodal({
      title: '内容包含html标签',
      sContent: '增加换行标签<br>' +
                '这是第二行的文字<br>' +
                '<div style="color:#f00;">第三行添加了样式，设置为红色</div>' +
                '<input type="text" placeholder="测试用的"><br>' +
                '随便写的内容'
    });
  });

  // 嵌入iframe
  $('.j-unmodal-iframe').click(function () {
    $.unmodal({
      title: '嵌入iframe',
      sContent: '<iframe height=300 width=500 src="http://player.youku.com/embed/XMTMzNTI4ODQ5Ng==" frameborder=0 allowfullscreen></iframe>',
      footer: false
    });
  });


});
