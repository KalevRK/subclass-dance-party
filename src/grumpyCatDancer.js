var GrumpyCatDancer = function(top, left) {
  CatDancer.call(this, top, left);
  this.$node.addClass('grumpyCat');
  this._size = 1;
  this._growing = true;
  this._id = GrumpyCatDancer.prototype.grumpyCount++;
  this._isChasing = true;
};

GrumpyCatDancer.prototype = Object.create(CatDancer.prototype);
GrumpyCatDancer.prototype.constructor = GrumpyCatDancer;

GrumpyCatDancer.prototype.step = function() {
  CatDancer.prototype.step.call(this);
  this.$node.css(this.resize());
};

GrumpyCatDancer.prototype.resize = function() {

  // growing phase
  this._growing && (this._size += 0.05);
  (this._size >= 2) && (this._growing = false);

  // shrinking phase
  !this._growing && (this._size -= 0.05);
  (this._size <= 1) && (this._growing = true);

  return {transform: 'scale('+this._size+', '+this._size+')'};
};

GrumpyCatDancer.prototype.grumpyCount = 0;

GrumpyCatDancer.prototype.lineUp = function() {
  this._isChasing = false;
  this._top = 100 + this._id * 100;
  this._left = 800;
  this.setPosition(this._top, this._left);
};
