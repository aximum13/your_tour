export function burgerInit() {
  const $b = $('.button-burger');
  const $h = $('html');
  const showClass = 'mobile-show-navigation';
  const hideClass = 'mobile-hide-navigation';
  const timeout = 500;

  function hideNavigation() {
    $h.removeClass(showClass).addClass(hideClass);
    setTimeout(() => {
      $h.removeClass(hideClass);
    }, timeout);
  }

  $b.on('click', () => {
    if ($h.is('.' + showClass)) {
      hideNavigation();
    } else {
      $h.addClass(showClass);
    }
  });

  $('.header-navigation')
    .find('ul li a')
    .on('click', () => {
      hideNavigation();
    });
}
