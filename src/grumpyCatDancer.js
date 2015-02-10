var GrumpyCatDancer = function(top, left) {
  CatDancer.call(this, top, left);
  this._size = 10;
  this._growing = true;

};

GrumpyCatDancer.prototype = Object.create(CatDancer.prototype);
GrumpyCatDancer.prototype.constructor = GrumpyCatDancer;

GrumpyCatDancer.prototype.step = function() {
  CatDancer.prototype.step.call(this);
  this.$node.css(this.resize());
};

GrumpyCatDancer.prototype.resize = function() {

  // growing phase
  this._growing && this._size++;
  (this._size === 30) && (this._growing = false);

  // shrinking phase
  !this._growing && this._size--;
  (this._size === 10) && (this._growing = true);

  return {height: this._size, width: this._size};
};

