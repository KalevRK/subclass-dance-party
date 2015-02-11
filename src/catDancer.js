var CatDancer = function(top, left){
  this._radius = 5;
  this._theta = 0;
  Dancer.call(this, top + this._radius, left, 50);
  this.$node.addClass('cat');
  this._id = CatDancer.prototype.catCount++;
  this._isChasing = true;
  this._hasFled = false;
};

CatDancer.prototype = Object.create(Dancer.prototype);
CatDancer.prototype.constructor = CatDancer;

CatDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  if (this._isChasing) {
    this._theta = (this._theta + (Math.PI / 50)) % (2 * Math.PI);
    this._left += this._radius * Math.cos(this._theta);
    this._top += this._radius * Math.sin(this._theta);
    this.setPosition(this._top, this._left);
  }

  if (!(this instanceof GrumpyCatDancer) && GrumpyCatDancer.prototype.grumpyCount > 5) {
    if (!this._hasFled) {
      this.flee();
      this._hasFled = true;
      this._radius = 2;
    }
  }
};

CatDancer.prototype.catCount = 0;

CatDancer.prototype.lineUp = function() {
  this._radius = 1;
  this._top = 200 + this._id * 100;
  this._left = 100;
  this.setPosition(this._top, this._left);
};

CatDancer.prototype.flee = function() {
  this._top = 500 + Math.random() * 100;
  this._left = 500 + Math.random() * 100;
};
