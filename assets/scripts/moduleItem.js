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
    l = t("MultipleController"),
    c = t("ConfData"),
    u = t("ShopConf"),
    p = t("GameSetting"),
    h = t("MainPageType"),
    d = t("EffectMgr"),
    f = t("GameMgr"),
    y = t("CloseUI"),
    g = t("Font"),
    m = t("commodityItem"),
    _ = t("superTreasureChestItem"),
    v = t("treasureChestItem"),
    b = {year: 0, month: 0, day: 0, hour: 0, minute: 0, second: 0},
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(w, a),
        (w.prototype.onLoad = function () {}),
        (w.prototype.onEnable = function () {
            (l.default.inst.nowPage = h.MainPageType.Shop), l.default.inst.on(this.node, this);
        }),
        (w.prototype.start = function () {
            this.init(),
                this.node.on(
                    cc.Node.EventType.TOUCH_START,
                    function () {
                        y.default.inst.closeNode();
                    },
                    this
                );
        }),
        (w.prototype.setData = function (t, e) {
            (this._moduleData = t), (this._BigIndex = e);
        }),
        (w.prototype.init = function () {
            var o = this;
            this.changeSize(),
                (this.renovateNum = c.default.inst.shopConf.getRenovateNum(this._BigIndex)),
                this.addModule(this._moduleData.type);
            var t,
                e = this._moduleData.interlayer,
                n = this._moduleData.titles;
            (this.renovate = this._moduleData.renovate),
                this.renovate.have &&
                    ((t = c.default.inst.shopConf.getStartDate(this._BigIndex)),
                    console.log("=====================>", t),
                    "" != t && (this.renovate.startDate = t)),
                e.forEach(function (t, e) {
                    o.addInterval(t, e);
                }),
                1 == n.need && this.addTitle(n),
                1 == this.renovate.have && this.addDownTime(),
                console.log("=======================>", this.node.y);
        }),
        (w.prototype.addDownTime = function () {
            var t, e;
            this.initTime(),
                this.renovateModule(),
                (this.renovateNum = c.default.inst.shopConf.getRenovateNum(this._BigIndex)),
                console.log("endDate====================>", this.stertDate, this.endDate, this.newStertDate),
                1 == this.renovate.isShow &&
                    (((t = cc.instantiate(this.downTime)).parent = this.downTimeNode),
                    (e = this.nodeY[this._BigIndex] + this.titleBgY - 122),
                    t.setPosition(0, e),
                    (this.downTimeLab = t.children[1].getComponent(cc.Label))),
                this.startDownTime();
        }),
        (w.prototype.initTime = function () {
            (this.newStertDate = this.renovate), (this.stertDate = this.getStartTime()), this.getEndTime();
        }),
        (w.prototype.renovateModule = function () {
            this.isRenovate && this.isRenovateModule();
        }),
        (w.prototype.isRenovateModule = function () {
            if (1 == this.renovate.have) {
                switch (((this.isRenovate = !1), this._moduleData.type)) {
                    case u.contentType.sixContent:
                        (this.isVoluntarily = !0),
                            (this.renovateNum = 0),
                            console.log(
                                "商品计算结束需要刷新,自动刷新模块",
                                this._BigIndex,
                                this.newStertDate.startDate
                            ),
                            c.default.inst.shopConf.setResettingDate(this._BigIndex, this.newStertDate.startDate),
                            c.default.inst.shopConf.removeNowCommodity(!1, this._BigIndex);
                        break;
                    case u.contentType.twoContent:
                        console.log("两宝箱计算结束需要刷新,自动刷新模块", this._BigIndex, this.newStertDate.startDate),
                            c.default.inst.shopConf.setRenovateTowModuleTreasureChest(
                                this._BigIndex,
                                this.newStertDate.startDate
                            );
                        break;
                    case u.contentType.oneContent:
                        console.log("一宝箱计算结束需要刷新,自动刷新模块", this._BigIndex, this.newStertDate.startDate),
                            c.default.inst.shopConf.setRenovateOneModuleTreasureChest(
                                this._BigIndex,
                                this.newStertDate.startDate
                            );
                }
                this.addModule(this._moduleData.type);
            }
        }),
        (w.prototype.getTimeStamp = function (t) {
            return new Date(t.year, t.month - 1, t.day, t.hour, t.minute, t.second).getTime();
        }),
        (w.prototype.startDownTime = function () {
            this.countTime(), this.schedule(this.countTime, 1);
        }),
        (w.prototype.countTime = function () {
            var t;
            (this.newTimeStamp = new Date().getTime()),
                this.getEndTime(),
                (this.surplusTimeStamp = this.endTimeStamp - this.newTimeStamp),
                null != this.downTimeLab &&
                    ((t =
                        (10 <= (t = g.default.getFon().time(this.surplusTimeStamp)).hour ? t.hour + "" : "0" + t.hour) +
                        ":" +
                        (10 <= t.minute ? t.minute + "" : "0" + t.minute) +
                        ":" +
                        (10 <= t.second ? t.second + "" : "0" + t.second)),
                    (this.downTimeLab.string = t));
        }),
        (w.prototype.getStartTime = function () {
            return this.dateClassChange(this.renovate.startDate);
        }),
        (w.prototype.dateClassChange = function (t) {
            var e = t.split("/"),
                t = b;
            return (
                (t.year = parseInt(e[0])),
                (t.month = parseInt(e[1])),
                (t.day = parseInt(e[2])),
                (t.hour = parseInt(e[3])),
                (t.minute = parseInt(e[4])),
                (t.second = parseInt(e[5])),
                t
            );
        }),
        (w.prototype.getEndTime = function () {
            var t = this.dateClassChange(this.renovate.startDate),
                e = this.renovate.renovateDay,
                o = this.getTimeStamp(t),
                t = new Date().getTime();
            t > o + e * this.dayStamp &&
                (console.log("超过结束时间"),
                1 == this.renovate.isRenovate
                    ? ((this.isRenovate = !0), console.log("需要刷新"))
                    : (console.log("不自动刷新，关闭模块"), this.unschedule(this.countTime), (this.node.active = !1)));
            var e = (o = t - ((t - o) % (e * this.dayStamp))) + e * this.dayStamp;
            (this.startTimeStamp = o), (this.endTimeStamp = e), (this.newTimeStamp = t);
            (o = g.default.getFon().formatDate(o)), (e = this.dateClassChange(g.default.getFon().formatDate(e)));
            (this.endDate = e),
                (this.newStertDate.startDate = o),
                this.isRenovate && ((this.renovate.startDate = o), this.renovateModule());
        }),
        (w.prototype.addTitle = function (t) {
            var e = cc.instantiate(this.title);
            e.parent = this.titleBg;
            var o = this.nodeY[this._BigIndex] + this.titleBgY - 60;
            e.setPosition(0, o),
                1 == t.isBtn
                    ? ((e.children[0].active = !0), e.children[0].on("click", this.titleBtn, this))
                    : (e.children[0].active = !1);
            e = cc.instantiate(this.titleNameLab);
            (e.getComponent(cc.Label).string = t.name), (e.parent = this.titleLeb), e.setPosition(0, 6 + o);
        }),
        (w.prototype.titleBtn = function () {
            console.log("标题按钮");
        }),
        (w.prototype.addInterval = function (t, e) {
            var o = this,
                n = null,
                i = null;
            switch (t) {
                case u.interlayerType.min:
                    (n = this.interlayer), (i = this.intervalBg);
                    break;
                case u.interlayerType.big:
                    (n = this.floor), (i = this.bottomBg);
            }
            t = cc.instantiate(i);
            t.parent = n;
            var r = 0;
            switch (this._moduleData.type) {
                case u.contentType.sixContent:
                    r = this.commodityItemHeight;
                    break;
                case u.contentType.twoContent:
                    r = this.treasureChestItemHeight;
                    break;
                case u.contentType.oneContent:
                    r = this.superTreasureChestItemHeight;
            }
            this.scheduleOnce(function () {
                console.warn(
                    "如果ui不正确，this.nodeY[" + o._BigIndex + "]需要=>",
                    o.node.y,
                    "this.titleBgY需要=>",
                    -o.titleBg.y,
                    "现在this.nodeY[" + o._BigIndex + "]=>",
                    o.nodeY[o._BigIndex],
                    "this.titleBgY=>",
                    o.titleBgY
                );
            }, 1);
            e = this.nodeY[this._BigIndex] - this.layout.paddingTop - r * (e + 1) - this.layout.spacingY * e;
            t.setPosition(0, e);
        }),
        (w.prototype.changeSize = function () {
            var t = 0,
                e = 0;
            0 == this._moduleData.titles.need && 0 == this._moduleData.renovate.have
                ? (t = u.moduleTop.NONE)
                : 1 == this._moduleData.titles.need &&
                  1 == this._moduleData.renovate.have &&
                  0 == this._moduleData.renovate.isShow
                ? (t = u.moduleTop.HAVE_TETLE)
                : 1 == this._moduleData.titles.need &&
                  1 == this._moduleData.renovate.have &&
                  1 == this._moduleData.renovate.isShow &&
                  (t = u.moduleTop.HAVE_TITLE_DTIME),
                1 == this._moduleData.click_renovate.isRenovate
                    ? (e = u.moduleBottom.HAVE)
                    : 0 == this._moduleData.click_renovate.isRenovate && (e = u.moduleBottom.NONE),
                (this.layout.paddingTop = t),
                (this.layout.paddingBottom = e),
                (this.node.width = u.moduleTypeWidth[this._moduleData.type]);
        }),
        (w.prototype.addModule = function (t) {
            switch (t) {
                case u.contentType.sixContent:
                    for (var e = 0; e < this._moduleData.content_num; e++)
                        null == this.node.children[e]
                            ? ((o = cc.instantiate(this.commodityItem))
                                  .getComponent(m.default)
                                  .setData(this._moduleData.content_id[e], e, this._BigIndex, this.isVoluntarily),
                              (o.parent = this.node))
                            : ("bottomBtn" == this.node.children[e].name &&
                                  this.node.removeChild(this.node.children[e]),
                              this.node.children[e]
                                  .getComponent(m.default)
                                  .setData(this._moduleData.content_id[e], e, this._BigIndex, this.isVoluntarily));
                    this.commodityItemHeight = this.node.children[0].height;
                    break;
                case u.contentType.twoContent:
                    for (e = 0; e < this._moduleData.content_num; e++)
                        null == this.node.children[e]
                            ? ((o = cc.instantiate(this.treasureChestItem))
                                  .getComponent(v.default)
                                  .setData(this._moduleData.content_id[e], e, this._BigIndex),
                              (o.parent = this.node))
                            : ("bottomBtn" == this.node.children[e].name &&
                                  this.node.removeChild(this.node.children[e]),
                              this.node.children[e]
                                  .getComponent(v.default)
                                  .setData(this._moduleData.content_id[e], e, this._BigIndex));
                    this.treasureChestItemHeight = this.node.children[0].height;
                    break;
                case u.contentType.oneContent:
                    for (e = 0; e < this._moduleData.content_num; e++)
                        null == this.node.children[e]
                            ? ((o = cc.instantiate(this.superTreasureChestItem))
                                  .getComponent(_.default)
                                  .setData(this._moduleData.content_id[e], e, this._BigIndex),
                              (o.parent = this.node))
                            : ("bottomBtn" == this.node.children[e].name &&
                                  this.node.removeChild(this.node.children[e]),
                              this.node.children[e]
                                  .getComponent(_.default)
                                  .setData(this._moduleData.content_id[e], e, this._BigIndex));
                    this.superTreasureChestItemHeight = this.node.children[0].height;
            }
            var o;
            1 == this._moduleData.click_renovate.isRenovate
                ? (null == this.node.children[this._moduleData.content_num]
                      ? (((o = cc.instantiate(this.bottomBtn)).parent = this.node),
                        (this._renovateBtn = o.children[0]),
                        this.onBtn())
                      : "bottomBtn" == this.node.children[this._moduleData.content_num].name
                      ? ((this.node.children[this._moduleData.content_num].active = !0),
                        (this._renovateBtn = this.node.children[this._moduleData.content_num].children[0]))
                      : (this.node.removeChild(this.node.children[this._moduleData.content_num]),
                        ((o = cc.instantiate(this.bottomBtn)).parent = this.node),
                        (this._renovateBtn = o.children[0])),
                  console.log(this.renovateNum, this._moduleData.click_renovate.renovateNum),
                  (this._renovateBtn.getComponent(cc.Button).interactable = !0),
                  this.renovateNum == this._moduleData.click_renovate.renovateNum &&
                      (this._renovateBtn.getComponent(cc.Button).interactable = !1),
                  (this._renovateBtn.children[0].children[2].getComponent(cc.Label).string =
                      this._moduleData.click_renovate.renovateNum -
                      this.renovateNum +
                      "/" +
                      this._moduleData.click_renovate.renovateNum))
                : ((this._renovateBtn = null),
                  this.node.children[this._moduleData.content_num] &&
                      this.node.removeChild(this.node.children[this._moduleData.content_num]));
        }),
        (w.prototype.onBtn = function () {
            this._renovateBtn &&
                (this._renovateBtn.on("click", this.clickRenovate, this),
                (this._renovateBtn.active = 1 == p.GameSetting.inst.show_shop_renovate));
        }),
        (w.prototype.clickRenovate = function () {
            var t,
                e = this;
            console.log("点击刷新"), null === (t = s.app.track) || void 0 === t || t.trackEvent("new_shop_update");
            f.default.inst.getVideoShareReward(
                function () {
                    var t;
                    null === (t = s.app.track) || void 0 === t || t.trackEvent("new_suc_shop_update"),
                        (e.isVoluntarily = !1),
                        (e.renovateNum += 1),
                        c.default.inst.shopConf.setRenovateNum(e._BigIndex, e.renovateNum),
                        c.default.inst.shopConf.removeNowCommodity(!0, e._BigIndex),
                        e.addModule(e._moduleData.type);
                },
                null,
                function () {
                    d.default.inst.showTips("获取视频失败，请稍候再试！");
                }
            );
        }),
        r([e(cc.Layout)], w.prototype, "layout", void 0),
        r([e(cc.Node)], w.prototype, "interlayer", void 0),
        r([e(cc.Node)], w.prototype, "floor", void 0),
        r([e(cc.Node)], w.prototype, "titleBg", void 0),
        r([e(cc.Node)], w.prototype, "titleLeb", void 0),
        r([e(cc.Node)], w.prototype, "downTimeNode", void 0),
        r([e(cc.Prefab)], w.prototype, "commodityItem", void 0),
        r([e(cc.Prefab)], w.prototype, "treasureChestItem", void 0),
        r([e(cc.Prefab)], w.prototype, "superTreasureChestItem", void 0),
        r([e(cc.Prefab)], w.prototype, "bottomBtn", void 0),
        r([e(cc.Prefab)], w.prototype, "intervalBg", void 0),
        r([e(cc.Prefab)], w.prototype, "bottomBg", void 0),
        r([e(cc.Prefab)], w.prototype, "title", void 0),
        r([e(cc.Prefab)], w.prototype, "titleNameLab", void 0),
        r([e(cc.Prefab)], w.prototype, "downTime", void 0),
        r([t], w));
function w() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.layout = null),
        (t.interlayer = null),
        (t.floor = null),
        (t.titleBg = null),
        (t.titleLeb = null),
        (t.downTimeNode = null),
        (t.commodityItem = null),
        (t.treasureChestItem = null),
        (t.superTreasureChestItem = null),
        (t.bottomBtn = null),
        (t.intervalBg = null),
        (t.bottomBg = null),
        (t.title = null),
        (t.titleNameLab = null),
        (t.downTime = null),
        (t._moduleData = null),
        (t._renovateBtn = null),
        (t.commodityItemHeight = 0),
        (t.treasureChestItemHeight = 0),
        (t.superTreasureChestItemHeight = 0),
        (t.stertDate = b),
        (t.endDate = b),
        (t.newStertDate = null),
        (t.startTimeStamp = 0),
        (t.newTimeStamp = 0),
        (t.endTimeStamp = 0),
        (t.downTimeLab = null),
        (t.surplusTimeStamp = 0),
        (t.isRenovate = !1),
        (t.isVoluntarily = !1),
        (t.dayStamp = 864e5),
        (t.renovateNum = 0),
        (t.nodeY = [null, 0, -854, -1399]),
        (t.titleBgY = 1753),
        (t.renovate = null),
        t
    );
}
o.default = t;
