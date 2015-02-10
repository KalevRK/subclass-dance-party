var GrumpyCatDancer = function(top, left) {
  CatDancer.call(this, top, left);
};

GrumpyCatDancer.prototype = Object.create(CatDancer.prototype);
GrumpyCatDancer.prototype.constructor = GrumpyCatDancer;

GrumpyCatDancer.prototype.step = function() {
  CatDancer.prototype.step.call(this);
  // additional functionality over CatDancer here
};
