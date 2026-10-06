var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.plus = function (t) {
    return new n(this.x + t.x, this.y + t.y);
}),
    (n.prototype.minus = function (t) {
        return new n(this.x - t.x, this.y - t.y);
    }),
    (n.prototype.multiply = function (t) {
        return this.x * t.x + this.y * t.y;
    }),
    (n.prototype.scale = function (t) {
        return new n(this.x * t, this.y * t);
    }),
    (n.prototype.normalize = function () {
        return this.scale(1 / this.abs());
    }),
    (n.prototype.absSq = function () {
        return this.multiply(this);
    }),
    (n.prototype.abs = function () {
        return Math.sqrt(this.absSq());
    }),
    (n.prototype.clone = function () {
        return new n(this.x, this.y);
    }),
    (n.ZERO = new n()),
    (e = n);
function n(t, e) {
    void 0 === t && (t = 0), void 0 === e && (e = 0), (this.x = 0), (this.y = 0), (this.x = t), (this.y = e);
}
o.default = e;
