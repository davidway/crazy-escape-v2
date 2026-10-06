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
    s = t("BasePanel"),
    l = t("UIEnum"),
    c = t("decorator"),
    u = t("MultipleController"),
    p = t("GameSetting"),
    h = t("App"),
    d = t("UserDataController"),
    f = t("EffectMgr"),
    y = t("EventTypes"),
    g = t("DateUtil"),
    m = t("GetGemController"),
    _ = t("GameMgr"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(v, a),
        (v.prototype.onDisable = function () {
            a.prototype.onDisable.call(this), this.unscheduleAllCallbacks();
        }),
        (v.prototype.initView = function () {}),
        (v.prototype.updateView = function () {
            var t = this;
            u.default.inst.eject(this.panel, this.bg, function () {
                t.onEvent();
            }),
                (this.titleGem.active = this.gem.active = 2 == this._viewData),
                (this.titleGold.active = this.gold.active = 1 == this._viewData);
            var e = 1 == this._viewData ? p.GameSetting.inst.dailyGold : p.GameSetting.inst.dailyGem;
            (this.numLab.string = "x" + e),
                (this.descLab.string = "快速获得大量" + (1 == this._viewData ? "金币" : "钻石")),
                (this.count = 1 == this._viewData ? d.default.inst.goldCount : d.default.inst.gemCount),
                (this.maxCount =
                    1 == this._viewData ? p.GameSetting.inst.dailyGoldCount : p.GameSetting.inst.dailyGemCount),
                (this.countLab.string =
                    cc.misc.clampf(this.maxCount - this.count, 0, this.maxCount) + "/" + this.maxCount),
                0 != m.default.inst.gem_time && 2 == this._viewData && (this.gem_time = m.default.inst.gem_time),
                0 < p.GameSetting.inst.wealth_cd &&
                    this.interactable(
                        this.btnFree,
                        (0 == this.gold_time && 1 == this._viewData) || (0 == this.gem_time && 2 == this._viewData)
                    ),
                this.updateTimes(),
                this.schedule(function () {
                    t.updateTimes();
                }, 0.5);
        }),
        (v.prototype.onEvent = function () {
            var t = this;
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    t.closeView();
                },
                this
            );
        }),
        (v.prototype.closeView = function () {
            h.app.gui.closeUI(l.UIEnum.FreeWealthView);
        }),
        (v.prototype.updateTimes = function () {
            p.GameSetting.inst.wealth_cd <= 0
                ? this.unscheduleAllCallbacks()
                : (0 < this.gold_time &&
                      1 == this._viewData &&
                      this.calcTimes(this.gold_time, p.GameSetting.inst.wealth_cd),
                  0 < this.gem_time &&
                      2 == this._viewData &&
                      this.calcTimes(this.gem_time, p.GameSetting.inst.wealth_cd));
        }),
        (v.prototype.calcTimes = function (t, e) {
            0 < t
                ? 0 < (t = e - Math.floor(0.001 * (Date.now() - t)))
                    ? (this.countLab.string = g.default.secondFormat3(t))
                    : (1 == this._viewData ? (this.gold_time = 0) : (this.gem_time = 0),
                      2 == this._viewData && m.default.inst.set_Gem_time(0),
                      this.interactable(this.btnFree, !0),
                      (this.countLab.string =
                          cc.misc.clampf(this.maxCount - this.count, 0, this.maxCount) + "/" + this.maxCount))
                : this.interactable(this.btnFree, !0);
        }),
        (v.prototype.onBtnCloseClick = function () {
            h.app.gui.closeUI(l.UIEnum.FreeWealthView);
        }),
        (v.prototype.onBtnFreeClick = function () {
            var t,
                e = this;
            this.count >= this.maxCount
                ? f.default.inst.showTips("今日次数已用完")
                : (null === (t = h.app.track) ||
                      void 0 === t ||
                      t.trackEvent(1 == this._viewData ? "new_free_coin" : "new_free_dia"),
                  _.default.inst.getVideoShareReward(
                      function () {
                          var t;
                          null === (t = h.app.track) ||
                              void 0 === t ||
                              t.trackEvent(1 == e._viewData ? "new_suc_free_coin" : "new_suc_free_dia"),
                              1 == e._viewData
                                  ? ((e.gold_time = Date.now()),
                                    d.default.inst.addGoldCount(),
                                    d.default.inst.addGold(p.GameSetting.inst.dailyGold, !0, !0))
                                  : ((e.gem_time = Date.now()),
                                    m.default.inst.set_Gem_time(e.gem_time),
                                    d.default.inst.addGemCount(),
                                    d.default.inst.addGem(p.GameSetting.inst.dailyGem, !0, !0),
                                    cc.director.emit(y.EventType.Shop_Commodity),
                                    h.app.event.emit(y.EventType.Home_Shop_Change_Page)),
                              h.app.gui.closeUI(l.UIEnum.FreeWealthView);
                      },
                      null,
                      function () {
                          f.default.inst.showTips("获取视频失败，请稍候再试！");
                      }
                  ));
        }),
        r([c.autoBind("cc.Node", "panel/titleGold")], v.prototype, "titleGold", void 0),
        r([c.autoBind("cc.Node", "panel/titleGem")], v.prototype, "titleGem", void 0),
        r([c.autoBind("cc.Label", "panel/descLab")], v.prototype, "descLab", void 0),
        r([c.autoBind("cc.Label", "panel/btnFree/layout/countLab")], v.prototype, "countLab", void 0),
        r([c.autoBind("cc.Node", "bg")], v.prototype, "bg", void 0),
        r([c.autoBind("cc.Node", "panel")], v.prototype, "panel", void 0),
        r([c.autoBind("cc.Node", "panel/btnClose")], v.prototype, "btnClose", void 0),
        r([c.autoBind("cc.Node", "panel/btnFree")], v.prototype, "btnFree", void 0),
        r([c.autoBind("cc.Node", "panel/xgn_xk/gold")], v.prototype, "gold", void 0),
        r([c.autoBind("cc.Node", "panel/xgn_xk/gem")], v.prototype, "gem", void 0),
        r([c.autoBind("cc.Label", "panel/xgn_xk/numLab")], v.prototype, "numLab", void 0),
        r([t], v));
function v() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.titleGold = null),
        (t.titleGem = null),
        (t.descLab = null),
        (t.countLab = null),
        (t.bg = null),
        (t.panel = null),
        (t.btnClose = null),
        (t.btnFree = null),
        (t.gold = null),
        (t.gem = null),
        (t.numLab = null),
        (t.count = 0),
        (t.maxCount = 0),
        (t.gold_time = 0),
        (t.gem_time = 0),
        t
    );
}
o.default = t;
