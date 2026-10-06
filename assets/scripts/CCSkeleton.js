var t = require;
var e = module;
var o = exports;
var n,
    i =
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
        }),
    r =
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
var a,
    s = t("BaseComponent"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.requireComponent,
    e =
        ((a = s.default),
        i(l, a),
        Object.defineProperty(l.prototype, "spine", {
            get: function () {
                return this._spine;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(l.prototype, "timeScale", {
            set: function (t) {
                this._spine && (this._spine.timeScale = t);
            },
            enumerable: !1,
            configurable: !0
        }),
        (l.prototype.onLoad = function () {
            (this.assetType = sp.SkeletonData),
                (this._spine = this.getComponent(sp.Skeleton)),
                (this.defAsset = this._spine.skeletonData);
        }),
        (l.prototype.setSkin = function (t) {
            this._spine && this._spine.skeletonData && this._spine.setSkin(t);
        }),
        (l.prototype.setAnimation = function (t) {
            var e = this,
                o = t.act,
                n = void 0 === o ? "" : o,
                i = t.loop,
                r = void 0 !== i && i,
                o = t.timeScale,
                i = void 0 === o ? 1 : o,
                o = t.complete,
                a = void 0 === o ? null : o,
                t = t.frame,
                s = void 0 === t ? null : t;
            n && this._spine && this._spine.skeletonData
                ? (this.unscheduleAllCallbacks(),
                  n != this._spine.animation && this._spine.setAnimation(0, n, r),
                  (this._spine.timeScale = i),
                  this._spine.setCompleteListener(null),
                  this._spine.setEventListener(null),
                  this._spine.setCompleteListener(function () {
                      r ||
                          ((e._spine.timeScale = 1),
                          e._spine.setCompleteListener(null),
                          e._spine.setEventListener(null)),
                          a && a();
                  }),
                  this._spine.setEventListener(function () {
                      s && s();
                  }))
                : this.simulateAnimation(a, s);
        }),
        (l.prototype.addAnimation = function (t, e, o) {
            void 0 === o && (o = !0),
                this._spine && (this._spine.setMix(this._spine.animation, e, 1), this._spine.addAnimation(t, e, o));
        }),
        (l.prototype.clearTrack = function (t) {
            this._spine && this._spine.clearTrack(t);
        }),
        (l.prototype.getAnimation = function () {
            var t;
            return null === (t = this._spine) || void 0 === t ? void 0 : t.animation;
        }),
        (l.prototype.simulateAnimation = function (t, e) {
            this.unscheduleAllCallbacks(),
                e &&
                    this.scheduleOnce(function () {
                        e();
                    }, 0.2),
                t &&
                    this.scheduleOnce(function () {
                        t();
                    }, 0.4);
        }),
        (l.prototype.setAsset = function (t) {
            cc.isValid(this.node) && cc.isValid(t) && (this._spine.skeletonData = t);
        }),
        (l.prototype.clearAsset = function () {
            this.autoClear && ((this._source = ""), (this._bundle = "")),
                (this._spine.skeletonData = null),
                console.log("[CCSkeleton]清理");
        }),
        (l.prototype.onDestroy = function () {
            (this._spine.skeletonData = null), a.prototype.onDestroy.call(this);
        }),
        r([t, e(sp.Skeleton)], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t._spine = null), t;
}
o.default = e;
