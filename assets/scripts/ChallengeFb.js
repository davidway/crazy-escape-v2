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
    s = t("App"),
    l = t("LayerMgr"),
    c = t("BaseUI"),
    u = t("EventTypes"),
    p = t("MultipleController"),
    h = t("UserDataController"),
    d = t("EffectMgr"),
    f = t("UIEnum"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = c.default),
        i(y, a),
        (y.prototype.onEnable = function () {
            this.on(this.node, this.onItemClick, this);
        }),
        (y.prototype.onDisable = function () {
            this.wobbleStop(), this.off(this.node);
        }),
        (y.prototype.wobbleStart = function () {
            this.wobbleTwee(), this.schedule(this.wobbleTwee, 1.5);
        }),
        (y.prototype.wobbleStop = function () {
            null != this._wobble &&
                (this._wobble.stop(), this.unschedule(this.wobbleTwee), (this.box.angle = 0), (this._wobble = null));
        }),
        (y.prototype.wobbleTwee = function () {
            null == this._wobble && (this._wobble = p.default.inst.wobble(this.box, 5, -5, 0.1)), this._wobble.start();
        }),
        (y.prototype.onItemClick = function () {
            this.fbData
                ? 1 == this.fbData.status
                    ? (h.default.inst.getChallengeReward(this.data),
                      this.updateView(),
                      s.app.event.emit(u.EventType.Home_Model_Change_Page))
                    : (0 != this.fbData.status && 2 != this.fbData.status) ||
                      s.app.gui.openUI(f.UIEnum.ChallengeDetailView, l.LayerEnum.VIEW_LAYER, {
                          data: this.data,
                          status: this.fbData.status
                      })
                : d.default.inst.showTips("尚未解锁");
        }),
        (y.prototype.setData = function (t) {
            (this.data = t),
                this.updateView(),
                p.default.inst.Breathing(this.tz_ksicon, 1.2, 1, 0.9),
                this.box.active && this.tz_gk7.active
                    ? (this.wobbleStart(), p.default.inst.opacity(this.tz_gk7, 1))
                    : this.wobbleStop();
        }),
        (y.prototype.updateView = function () {
            var t = h.default.inst.getChallengeFbData(this.data.id);
            h.default.inst.chapter,
                (this.fbData = t),
                (this.box.active = !0),
                (this.tz_ksicon.active = !0),
                (this.lock.active = !1),
                (this.mask.active = !1),
                (this.isGet.active = !1),
                (this.tz_gk7.active = !1),
                (this.tz_gk5.active = !1);
            var e = h.default.inst.getUserChapterVo(this.data.chapter);
            1 == (null == e ? void 0 : e.isPass)
                ? ((t = t || {id: this.data.id, status: 0}),
                  1 == this.data.index
                      ? ((this.mask.active = t.status < 0),
                        (this.tz_gk7.active = 1 == t.status),
                        (this.tz_gk5.active = this.tz_gk7.active),
                        (this.isGet.active = 2 == t.status),
                        (this.fbData = t),
                        (this.box.active = !this.isGet.active),
                        (this.tz_ksicon.active = this.box.active && !this.tz_gk7.active))
                      : (2 != this.data.index && 3 != this.data.index) ||
                        (0 < t.status
                            ? ((this.mask.active = t.status < 0),
                              (this.tz_gk7.active = 1 == t.status),
                              (this.tz_gk5.active = this.tz_gk7.active),
                              (this.isGet.active = 2 == t.status),
                              (this.box.active = !this.isGet.active),
                              (this.tz_ksicon.active = this.box.active && !this.tz_gk7.active))
                            : (e = h.default.inst.getChallengeFbData(this.data.id - 1)) && 0 < e.status
                            ? (this.fbData = t)
                            : ((this.mask.active = !0),
                              (this.lock.active = !0),
                              (this.tz_ksicon.active = !1),
                              (this.box.active = !1))))
                : ((this.mask.active = !0),
                  (this.lock.active = !0),
                  (this.tz_ksicon.active = !1),
                  (this.box.active = !1));
        }),
        (y.prototype.setIcon = function (t) {
            this.icon.spriteFrame = t;
        }),
        r([e(cc.Sprite)], y.prototype, "icon", void 0),
        r([e(cc.Node)], y.prototype, "isGet", void 0),
        r([e(cc.Node)], y.prototype, "mask", void 0),
        r([e(cc.Node)], y.prototype, "box", void 0),
        r([e(cc.Node)], y.prototype, "lock", void 0),
        r([e(cc.Node)], y.prototype, "tz_ksicon", void 0),
        r([e(cc.Node)], y.prototype, "tz_gk7", void 0),
        r([e(cc.Node)], y.prototype, "tz_gk5", void 0),
        r([t], y));
function y() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.icon = null),
        (t.isGet = null),
        (t.mask = null),
        (t.box = null),
        (t.lock = null),
        (t.tz_ksicon = null),
        (t.tz_gk7 = null),
        (t.tz_gk5 = null),
        (t.fbData = null),
        (t.data = null),
        (t._wobble = null),
        t
    );
}
o.default = t;
