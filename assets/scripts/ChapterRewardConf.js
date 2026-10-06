var t = require;
var e = module;
var o = exports;
var n =
    (this && this.__decorate) ||
    function (t, e, o, n) {
        var i,
            r = arguments.length,
            a = r < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
        else
            for (var s = t.length - 1; 0 <= s; s--)
                (i = t[s]) && (a = (r < 3 ? i(a) : 3 < r ? i(e, o, a) : i(e, o)) || a);
        return 3 < r && a && Object.defineProperty(e, o, a), a;
    };
Object.defineProperty(o, "__esModule", {value: !0});
var i = cc._decorator,
    e = i.ccclass,
    e =
        (i.property,
        Object.defineProperty(r.prototype, "max_id", {
            get: function () {
                return this._max_id;
            },
            enumerable: !1,
            configurable: !0
        }),
        (r.prototype.parseJson = function (t, e) {
            for (var e = e.chapterRewardConf, o = null, n = 0, i = e; n < i.length; n++) {
                var r = i[n];
                this.rewardMap.set(r.id, r),
                    (this._max_id = Math.max(this._max_id, r.id)),
                    o && o.index >= r.index && this.afterRewardMap.set(o.chapter, o),
                    (o = r);
            }
            this.afterRewardMap.set(o.chapter, o),
                console.log("[ChapterRewardConf]-->[line:13]:", e, this.rewardMap, this.afterRewardMap);
        }),
        (r.prototype.getChapterRewardVo = function (t) {
            return this.rewardMap.get(t);
        }),
        (r.prototype.getAfterReward = function (t) {
            return this.afterRewardMap.get(t);
        }),
        (r.prototype.isLast = function (t) {
            return t > this._max_id;
        }),
        n([e], r));
function r() {
    (this.rewardMap = new Map()), (this.afterRewardMap = new Map()), (this._max_id = 0);
}
o.default = e;
