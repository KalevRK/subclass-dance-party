var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this._top = top;
  this._left = left;

  this.step(); // initiate loop of step calls
  this.setPosition(this._top, this._left); // initialize position
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this),this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
