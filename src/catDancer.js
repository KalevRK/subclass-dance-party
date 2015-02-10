var CatDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

CatDancer.prototype = Object.create(Dancer.prototype);
CatDancer.prototype.constructor = CatDancer;

CatDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // additional functionality here
};
