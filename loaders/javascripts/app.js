$(document).ready(function() {
  $('.spinner-wrap .source--trigger').each(function() {
    $(this).click(function() {
      let targetElem = $(this).attr("data-loader");
      $('.content').removeClass('visible');
      $('.source-code-wrapper').addClass('visible');
      $('.content[data-loader="' + targetElem + '"]').addClass('visible');
    });
  });

  $(document).keydown(function(event) {
    if (event.keyCode == 27) {
      $('.content.visible, .source-code-wrapper.visible').removeClass('visible');
    }
  });

  $('.close-btn').on('click', function() {
    $('.content.visible, .source-code-wrapper.visible').removeClass('visible');
  });
});
