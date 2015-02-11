var GrumpyCatDancer = function(top, left) {
  CatDancer.call(this, top, left);
  this.$node.addClass('grumpyCat');
  this._size = 1;
  this._growing = true;
  this._surrounding = false;
  this._id = GrumpyCatDancer.prototype.grumpyCount++;
};

GrumpyCatDancer.prototype = Object.create(CatDancer.prototype);
GrumpyCatDancer.prototype.constructor = GrumpyCatDancer;

GrumpyCatDancer.prototype.step = function() {
  CatDancer.prototype.step.call(this);
  this.$node.css(this.resize());

  if (!this._surrounding && GrumpyCatDancer.prototype.grumpyCount > 5) {
    this.surround();
    this._surrounding = true;
  }
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
  this._top = 200 + this._id * 100;
  this._left = 800;
  this.$node.animate({top: this._top, left: this._left}, 500);
};

GrumpyCatDancer.prototype.surround = function() {
  this._top = 500;
  this._left = 500;
  this._theta = (2 * Math.PI / GrumpyCatDancer.prototype.grumpyCount) * this._id;
  this._radius = 10;
};
