export function addClassSvgEl($el, className) {
  const itemClasses = $el.attr('class');

  $el.attr('class', itemClasses + ' ' + className);
}

export function removeClassSvgEl($el, className) {
  const itemClasses = $el.attr('class');

  const replace = new RegExp(' ' + className, 'g');

  $el.attr('class', itemClasses.replace(replace, ''));
}

export function addSlashToPath(path) {
  let newPath = path;

  if (newPath.slice(-1) !== '/') {
    newPath += '/';
  }

  return newPath;
}

export function isMobile() {
  return $(window).width() < 1199;
}
