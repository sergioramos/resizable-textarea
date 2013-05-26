var ev = require('event')
  , splitReg = /\r\n|\r|\n/
;

module.exports = function (element, options) {

  options = options || {};

  var min = options.min || 1
    , max = options.max || Infinity
  ;

  ev.bind(element, 'input', function () {

    var val = element.value
      , lines = val.split(splitReg)
      , cols = element.clientHeight < element.scrollHeight ? element.cols : element.cols + 2
      , rows = 0
      , i = 0
      , l = lines.length
    ;

    while (i < l) {
        rows += Math.max(1, Math.ceil(lines[i].length / cols));
        i += 1;
    }

    element.setAttribute('rows', Math.max(min, Math.min(max, rows)));

  });

  // set the minimum rows
  element.setAttribute('rows', min);

};
