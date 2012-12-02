var ev = require('event');

module.exports = function (element) {
  ev.bind(element, 'input', function () {
    rows = parseInt(this.getAttribute('rows'));
    var scrollHeight = this.scrollHeight;
    var height = this.clientHeight;
    
    this.setAttribute('rows', Math.ceil(((scrollHeight * rows) / height)))
  });
};