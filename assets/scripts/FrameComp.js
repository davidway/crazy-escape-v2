var t = require;
var e = module;
var o = exports;
var n,
    e =
        (this && this.__extends) ||
        ((n = function (t, e) {
            return (n =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
        }),
        function (t, e) {
            function o() {
                this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
        });
Object.defineProperty(o, "__esModule", {value: !0}), (o.FrameComp = void 0);
var i,
    e =
        ((i = t("BaseComp").default),
        e(r, i),
        Object.defineProperty(r.prototype, "isValid", {
            get: function () {
                return this._isValid;
            },
            enumerable: !1,
            configurable: !0
        }),
        (r.prototype.setData = function (t) {
            t && ((this._isValid = !0), this.actMap.set(t.name, t));
        }),
        (r.prototype.getActName = function () {
            return this.actName;
        }),
        (r.prototype.getFrameIndex = function () {
            return this.frameIndex + 1;
        }),
        (r.prototype.play = function (t, e) {
            this.actMap.has(t) &&
                ((this.actName = t),
                (this.currAct = this.actMap.get(t)),
                (this.frameIndex = 0),
                (this.curr_time = 0),
                e && (this.currAct.complete = e),
                (this.body.spriteFrame = this.currAct.frames[this.frameIndex]));
        }),
        (r.prototype.has = function (t) {
            return this.actMap.has(t);
        }),
        (r.prototype.onUpdate = function (t) {
            this.currAct &&
                this._isValid &&
                ((this.curr_time += t), this.curr_time >= this.currAct.interval) &&
                ((this.curr_time -= this.currAct.interval),
                this.frameIndex != this.currAct.frames.length - 1 || this.currAct.loop || !this.currAct.complete
                    ? ((this.frameIndex = this.currAct.loop
                          ? (this.frameIndex + 1) % this.currAct.frames.length
                          : cc.misc.clampf(this.frameIndex + 1, 0, this.currAct.frames.length - 1)),
                      (this.body.spriteFrame = this.currAct.frames[this.frameIndex]))
                    : this.currAct.complete());
        }),
        (r.prototype.clear = function () {
            (this._isValid = !1),
                (this.actName = ""),
                (this.currAct = null),
                (this.body.spriteFrame = null),
                this.actMap.forEach(function (t) {
                    (t.complete = null), (t.frames = null);
                }),
                this.actMap.clear();
        }),
        r);
function r(t, e) {
    var o = i.call(this, t) || this;
    return (
        (o.parent = t),
        (o.body = e),
        (o.actMap = new Map()),
        (o.curr_time = 0),
        (o.frameIndex = 0),
        (o.actName = ""),
        (o.currAct = null),
        (o._isValid = !1),
        o
    );
}
o.FrameComp = e;
