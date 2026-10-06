
  cc.Node.prototype.prefab_uuid = "", cc.ActionInterval.prototype.step = function (t) {
    if (this.paused) return;
    this._firstTick && !this._goto ? (this._firstTick = !1, this._elapsed = 0) : this._elapsed += t;
    var i = this._elapsed / (this._duration > 1.192092896e-7 ? this._duration : 1.192092896e-7);
    i = 1 > i ? i : 1, this.update(i > 0 ? i : 0), this._repeatMethod && this._timesForRepeat > 1 && this.isDone() && (this._repeatForever || this._timesForRepeat--, this.startWithTarget(this.target), this.step(this._elapsed - this._duration));
  }, cc.Tween.prototype.pause = function () {
    this._finalAction && (this._finalAction.paused = !0);
  }, cc.Tween.prototype.resume = function () {
    this._finalAction && (this._finalAction.paused = !1);
  }, cc.Tween.prototype.speed = function (t) {
    this._finalAction && (this._finalAction._speedMethod = !0, this._finalAction._speed = t);
  }, cc.Tween.prototype.duration = function () {
    return this._finalAction && this._finalAction._duration;
  }, cc.Tween.prototype.elapsed = function () {
    return this._finalAction && this._finalAction._elapsed;
  }; 