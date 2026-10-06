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
    p = t("App"),
    h = t("UserDataController"),
    d = t("Prop"),
    f = t("Lines"),
    y = t("EffectMgr"),
    g = t("GameSetting"),
    m = t("CleanController"),
    _ = t("GameMgr"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(v, a),
        (v.prototype.initView = function () {
            this.useEnergy = g.GameSetting.inst.cleanUseEnergy;
        }),
        (v.prototype.updateView = function () {
            var t = this;
            m.CleanController.inst.isNewDay(),
                u.default.inst.eject(this.panel, this.bg, function () {
                    t.onEvent();
                }),
                (this.chapterData = h.default.inst.getUserChapterVo(h.default.inst.chapter)),
                (this.showChapter = this.chapterData.isPass ? h.default.inst.chapter : h.default.inst.chapter - 1),
                this.init(),
                this.setReward();
        }),
        (v.prototype.onEvent = function () {
            var t = this;
            this.bg.on(cc.Node.EventType.TOUCH_START, function () {}, this),
                this.panel.on(
                    cc.Node.EventType.TOUCH_START,
                    function () {
                        a.prototype.cloesView.call(t);
                    },
                    this
                );
        }),
        (v.prototype.init = function () {
            (this.surplusNum = m.CleanController.inst.cleanData.surplusNum),
                (this.freeNum = m.CleanController.inst.cleanData.freeNum),
                (this.energyLab.string = "x" + this.useEnergy),
                (this.surplusLab.string = "可用次数：" + this.surplusNum),
                (this.freeLab.string = "可用次数：" + this.freeNum),
                this.setBtn();
        }),
        (v.prototype.setBtn = function () {
            this.setGray(this.btnEnergy, !(0 < this.surplusNum)),
                this.interactable(this.btnEnergy, 0 < this.surplusNum),
                this.setGray(this.btnVideo, !(0 < this.freeNum)),
                this.interactable(this.btnVideo, 0 < this.freeNum),
                (this.rightBtn.active =
                    this.showChapter < (this.chapterData.isPass ? h.default.inst.chapter : h.default.inst.chapter - 1)),
                (this.leftBtn.active = 0 < this.showChapter - 1);
        }),
        (v.prototype.setReward = function () {
            a.prototype.cloesView.call(this),
                this.setBtn(),
                this.titleIcon.setSource("texture/chapter/name_" + this.showChapter),
                (this.oneDrawingList = m.CleanController.inst.getReward(this.showChapter)),
                this.line.getComponent(f.default).setBlock(this.oneDrawingList, d.Prop.drawing);
        }),
        (v.prototype.getReward = function (t) {
            a.prototype.cloesView.call(this),
                m.CleanController.inst.addReward(t, this.oneDrawingList),
                (this.oneDrawingList = m.CleanController.inst.getReward(this.showChapter)),
                this.init();
        }),
        (v.prototype.cloesView = function () {
            a.prototype.cloesView.call(this), p.app.gui.closeUI(l.UIEnum.CleanView);
        }),
        (v.prototype.onBtnCloseClick = function () {
            this.cloesView();
        }),
        (v.prototype.onLeftBtnClick = function () {
            0 < this.showChapter - 1 && (this.showChapter--, this.setReward());
        }),
        (v.prototype.onRightBtnClick = function () {
            this.showChapter < (this.chapterData.isPass ? h.default.inst.chapter : h.default.inst.chapter - 1) &&
                (this.showChapter++, this.setReward());
        }),
        (v.prototype.onBtnVideoClick = function () {
            var t,
                e = this;
            0 < this.freeNum &&
                (null === (t = p.app.track) || void 0 === t || t.trackEvent("new_free_saodang"),
                _.default.inst.getVideoShareReward(
                    function () {
                        var t;
                        null === (t = p.app.track) || void 0 === t || t.trackEvent("new_suc_free_saodang"),
                            e.getReward(0);
                    },
                    null,
                    function () {
                        y.default.inst.showTips("获取视频失败，请稍候再试！");
                    }
                ));
        }),
        (v.prototype.onBtnEnergyClick = function () {
            0 < this.surplusNum && h.default.inst.useEnergy(this.useEnergy) && this.getReward(1);
        }),
        r([c.autoBind("cc.Node", "panel/middle/introduce/line")], v.prototype, "line", void 0),
        r([c.autoBind("CCImage", "panel/titleIcon")], v.prototype, "titleIcon", void 0),
        r([c.autoBind("cc.Label", "panel/bottom/surplusLab")], v.prototype, "surplusLab", void 0),
        r([c.autoBind("cc.Label", "panel/bottom/freeLab")], v.prototype, "freeLab", void 0),
        r([c.autoBind("cc.Label", "panel/bottom/btn/btnEnergy/energyLab")], v.prototype, "energyLab", void 0),
        r([c.autoBind("cc.Node", "panel/middle/btn/leftBtn")], v.prototype, "leftBtn", void 0),
        r([c.autoBind("cc.Node", "panel/middle/btn/rightBtn")], v.prototype, "rightBtn", void 0),
        r([c.autoBind("cc.Node", "panel/bottom/btn/btnVideo")], v.prototype, "btnVideo", void 0),
        r([c.autoBind("cc.Node", "panel/bottom/btn/btnEnergy")], v.prototype, "btnEnergy", void 0),
        r([c.autoBind("cc.Node", "bg")], v.prototype, "bg", void 0),
        r([c.autoBind("cc.Node", "panel")], v.prototype, "panel", void 0),
        r([c.autoBind("cc.Node", "panel/btnClose")], v.prototype, "btnClose", void 0),
        r([t], v));
function v() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.line = null),
        (t.titleIcon = null),
        (t.surplusLab = null),
        (t.freeLab = null),
        (t.energyLab = null),
        (t.leftBtn = null),
        (t.rightBtn = null),
        (t.btnVideo = null),
        (t.btnEnergy = null),
        (t.bg = null),
        (t.panel = null),
        (t.btnClose = null),
        (t.showChapter = 0),
        (t.freeNum = 1),
        (t.surplusNum = 5),
        (t.useEnergy = 15),
        (t.oneDrawingList = null),
        (t.chapterData = null),
        t
    );
}
o.default = t;
