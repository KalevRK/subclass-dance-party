var GrumpyCatDancer = function(top, left, timeBetweenSteps) {
  CatDancer.call(this, top, left, timeBetweenSteps);
};

GrumpyCatDancer.prototype = Object.create(CatDancer.prototype);
GrumpyCatDancer.prototype.constructor = GrumpyCatDancer;

GrumpyCatDancer.prototype.step = function() {
  CatDancer.prototype.step.call(this);
  // additional functionality over CatDancer here
};
