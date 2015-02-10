var CatDancer = function(top, left){
  this._radius = 5;
  this._theta = 0;
  Dancer.call(this, top + this._radius, left, 50);
};

CatDancer.prototype = Object.create(Dancer.prototype);
CatDancer.prototype.constructor = CatDancer;

CatDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this._theta = (this._theta + (Math.PI / 50)) % (2 * Math.PI);
  this._left += this._radius * Math.cos(this._theta);
  this._top += this._radius * Math.sin(this._theta);
  this.setPosition(this._top, this._left);
};
