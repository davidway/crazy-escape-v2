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
    s = t("DateUtil"),
    l = t("BaseUI"),
    c = t("HellDataController"),
    u = t("UserDataController"),
    p = t("EffectMgr"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = l.default),
        i(h, a),
        (h.prototype.onLoad = function () {
            this.shake = cc
                .tween(this.boxClose)
                .sequence(
                    cc.tween().to(0.06, {angle: -6}),
                    cc.tween().to(0.06, {angle: 0}),
                    cc.tween().to(0.06, {angle: 6}),
                    cc.tween().to(0.06, {angle: 0}),
                    cc.tween().to(0.06, {angle: -6}),
                    cc.tween().to(0.06, {angle: 0}),
                    cc.tween().to(0.06, {angle: 6}),
                    cc.tween().to(0.06, {angle: 0}),
                    cc.tween().delay(0.5)
                )
                .repeatForever();
        }),
        (h.prototype.onEnable = function () {
            this.on(this.node, this.onBoxClick, this);
        }),
        (h.prototype.onDisable = function () {
            this.off(this.node);
        }),
        (h.prototype.setData = function (t, e, o, n) {
            void 0 === n && (n = !1),
                (this.chapter = t),
                (this.index = e),
                (this.data = o),
                (this.isLast = n),
                (this.key = this.chapter + "_" + this.index),
                this.updateView();
        }),
        (h.prototype.autoReward = function () {
            (this.boxOpen.active = !0), (this.boxClose.active = !1);
        }),
        (h.prototype.updateView = function () {
            var t, e;
            this.data &&
                ((this.status = 0),
                (this.timeLab.string = s.default.secondFormat3(this.data.time)),
                (t = c.default.inst.getRewardStatus(this.key)),
                (this.boxOpen.active = 2 == t),
                (this.boxClose.active = 2 != t),
                this.shake.stop(),
                (this.boxClose.angle = 0),
                2 != t
                    ? ((e = u.default.inst.getUserChapterVo(this.chapter)) &&
                          (e.best_time > this.data.time || 1 == e.isPass) &&
                          ((this.status = 1), this.shake.start()),
                      console.log("[HellChestBox]-->[line:78]:", this.key, this.status, t))
                    : (this.status = 2));
        }),
        (h.prototype.onBoxClick = function () {
            1 == this.status
                ? (c.default.inst.getReward(this.key, this.data), this.updateView())
                : 0 == this.status && p.default.inst.showTips("尚未达成领取条件");
        }),
        r([e(cc.Node)], h.prototype, "boxOpen", void 0),
        r([e(cc.Node)], h.prototype, "boxClose", void 0),
        r([e(cc.Label)], h.prototype, "timeLab", void 0),
        r([t], h));
function h() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.boxOpen = null),
        (t.boxClose = null),
        (t.timeLab = null),
        (t.status = 0),
        (t.chapter = 0),
        (t.index = 0),
        (t.isLast = !1),
        (t.data = null),
        (t.shake = null),
        (t.key = ""),
        t
    );
}
o.default = t;
