var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');
  this._id = BlinkyDancer.prototype.blinkyCount++;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

BlinkyDancer.prototype.blinkyCount = 0;

BlinkyDancer.prototype.lineUp = function() {
  this._top = 100;
  this._left = 100 + this._id * 50;
  this.$node.animate({top: this._top, left: this._left}, 500);
};
