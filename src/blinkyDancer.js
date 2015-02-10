var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');
  this._id = this.blinkyCount++;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

BlinkyDancer.prototype.blinkyCount = 0;

BlinkyDancer.prototype.lineUp = function() {
  console.log("I'm a blinky dancer");
};
