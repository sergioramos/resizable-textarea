var ev = require('event');

module.exports = function (element, options) {

  options = options || {};

  var min = options.min || 1
    , max = options.max || Infinity
  ;

  ev.bind(element, 'input', function () {
    var rows = parseInt(this.getAttribute('rows'));
    var scrollHeight = this.scrollHeight;
    var height = this.clientHeight;

    this.setAttribute('rows', Math.max(min, Math.min(max, Math.ceil(((scrollHeight * rows) / height)))));
  });

  // set the minimum rows
  element.setAttribute('rows', min);

};
