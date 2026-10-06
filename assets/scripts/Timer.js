var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.on = function (t, e, o, n, i) {
    var r;
    void 0 === o && (o = 0),
        void 0 === n && (n = 0),
        void 0 === i && (i = !1),
        t && e
            ? this.has(t, e)
                ? console.error("有相同的：owner 和 method")
                : ((r = this.getFreeHandler()) ||
                      ((r = new a()),
                      this._runMap.push(r),
                      console.log("[Timer]-->[line:42]:创建handler", this._runMap.length)),
                  (r.owner = t),
                  (r.method = e),
                  (r.delay = o),
                  (r.exeTime = this._exeTime + o),
                  (r.repeatCount = n),
                  i && e.call(t))
            : console.error("on erroe", null == t, null == e);
}),
    (n.prototype.once = function (t, e, o) {
        this.on(t, e, (o = void 0 === o ? 0 : o), 1);
    }),
    (n.prototype.off = function (t, e) {
        t ? (e ? (e = this.getHandler(t, e)) && e.clear() : this.targetOff(t)) : console.error("off ", null == t);
    }),
    (n.prototype.targetOff = function (e) {
        this._runMap.forEach(function (t) {
            t.owner == e && t.clear();
        });
    }),
    (n.prototype.update = function (t) {
        var e = this;
        (this._exeTime += t),
            this._runMap.forEach(function (t) {
                t.owner && t.method && e._exeTime >= t.exeTime && t.run();
            });
    }),
    (n.prototype.has = function (t, e) {
        return null != this.getHandler(t, e);
    }),
    (n.prototype.getHandler = function (e, o) {
        return this._runMap.find(function (t) {
            return t.owner == e && t.method == o;
        });
    }),
    (n.prototype.getFreeHandler = function () {
        return this._runMap.find(function (t) {
            return null == t.method && null == t.owner;
        });
    }),
    (e = n);
function n() {
    (this._runMap = []),
        (this._exeTime = 0),
        cc.director.getScheduler().enableForTarget(this),
        cc.director.getScheduler().scheduleUpdate(this, 1e4, !1);
}
o.default = e;
var a =
    ((i.prototype.clear = function () {
        (this._currentCount = 0),
            (this.repeatCount = 0),
            (this.delay = 0),
            (this.exeTime = 0),
            (this.owner = null),
            (this.method = null);
    }),
    (i.prototype.run = function () {
        var t, e;
        this.method &&
            this.owner &&
            ((this.exeTime += this.delay),
            (this._currentCount += 1),
            (t = this.owner),
            (e = this.method),
            0 < this.repeatCount && this._currentCount >= this.repeatCount && this.clear(),
            t && e && e.call(t));
    }),
    i);
function i() {
    (this.repeatCount = 0), (this.exeTime = 0), (this.delay = 0), (this._currentCount = 0);
}
