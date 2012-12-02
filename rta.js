var ev = require('event');

module.exports = function (element) {
  ev.bind(element, 'input', function () {
    var initialScroll = this.scrollWidth;
    
    this.setAttribute('wrap', 'off')
    var scroll = this.scrollWidth;
    this.setAttribute('wrap', '');
    
    var rows = Math.floor((scroll/initialScroll)%initialScroll);
    if(rows > 1) this.setAttribute('rows', rows + 1);
    rows = parseInt(this.getAttribute('rows'));
    
    var height = this.clientHeight;
    scroll = this.scrollHeight;
    
    if(scroll > height) this.setAttribute('rows', rows + 1);
  });
};