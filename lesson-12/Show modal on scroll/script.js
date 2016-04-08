(function(){
  // Привязываем действия на скролл
  $(window).on('scroll', function() {
    // Если расстояние сверху > 1200px
    if ($(this).scrollTop() > 1200) {
      // то показываем модальное окно
      $('#myModal').modal({
        backdrop: false,
        keyboard: false
      });

      // Отвязываем обработчик, чтобы больше не показывалось
      $(this).unbind();
    };
  });
})();