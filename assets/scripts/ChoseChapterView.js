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
        },
    s =
        (this && this.__awaiter) ||
        function (t, a, s, l) {
            return new (s = s || Promise)(function (o, e) {
                function n(t) {
                    try {
                        r(l.next(t));
                    } catch (t) {
                        e(t);
                    }
                }
                function i(t) {
                    try {
                        r(l.throw(t));
                    } catch (t) {
                        e(t);
                    }
                }
                function r(t) {
                    var e;
                    t.done
                        ? o(t.value)
                        : ((e = t.value) instanceof s
                              ? e
                              : new s(function (t) {
                                    t(e);
                                })
                          ).then(n, i);
                }
                r((l = l.apply(t, a || [])).next());
            });
        },
    l =
        (this && this.__generator) ||
        function (o, n) {
            var i,
                r,
                a,
                s = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: []
                },
                t = {next: e(0), throw: e(1), return: e(2)};
            return (
                "function" == typeof Symbol &&
                    (t[Symbol.iterator] = function () {
                        return this;
                    }),
                t
            );
            function e(e) {
                return function (t) {
                    return (function (e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (
                                    ((i = 1),
                                    r &&
                                        (a =
                                            2 & e[0]
                                                ? r.return
                                                : e[0]
                                                ? r.throw || ((a = r.return) && a.call(r), 0)
                                                : r.next) &&
                                        !(a = a.call(r, e[1])).done)
                                )
                                    return a;
                                switch (((r = 0), (e = a ? [2 & e[0], a.value] : e)[0])) {
                                    case 0:
                                    case 1:
                                        a = e;
                                        break;
                                    case 4:
                                        return s.label++, {value: e[1], done: !1};
                                    case 5:
                                        s.label++, (r = e[1]), (e = [0]);
                                        continue;
                                    case 7:
                                        (e = s.ops.pop()), s.trys.pop();
                                        continue;
                                    default:
                                        if (
                                            !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                                            (6 === e[0] || 2 === e[0])
                                        ) {
                                            s = 0;
                                            continue;
                                        }
                                        if (3 === e[0] && (!a || (e[1] > a[0] && e[1] < a[3]))) {
                                            s.label = e[1];
                                            break;
                                        }
                                        if (6 === e[0] && s.label < a[1]) {
                                            (s.label = a[1]), (a = e);
                                            break;
                                        }
                                        if (a && s.label < a[2]) {
                                            (s.label = a[2]), s.ops.push(e);
                                            break;
                                        }
                                        a[2] && s.ops.pop(), s.trys.pop();
                                        continue;
                                }
                                e = n.call(o, s);
                            } catch (t) {
                                (e = [6, t]), (r = 0);
                            } finally {
                                i = a = 0;
                            }
                        if (5 & e[0]) throw e[1];
                        return {value: e[0] ? e[1] : void 0, done: !0};
                    })([e, t]);
                };
            }
        };
Object.defineProperty(o, "__esModule", {value: !0});
var a,
    c = t("BasePanel"),
    u = t("UIEnum"),
    p = t("decorator"),
    h = t("App"),
    d = t("CCImage"),
    f = t("UserDataController"),
    y = t("GameMgr"),
    g = t("LayerMgr"),
    m = t("ConfData"),
    _ = t("ResMgr"),
    v = t("ResUtils"),
    b = t("MultipleController"),
    w = t("chapterItem"),
    U = t("UnlockContentLabels"),
    LA = t("LobbyArcade"),
    C = t("GameEnums"),
    k = cc._decorator,
    e = k.ccclass,
    t = k.property,
    e =
        (k.inspector,
        (a = c.default),
        i(E, a),
        (E.prototype.initView = function () {
            (this.pages = []), (this.nameImg = this.nameSp.getComponent(d.default));
            for (var t = 0; t < m.default.inst.chapterConf.getMaxChapter(); t++) {
                var e = cc.instantiate(this.itemPre);
                e.getComponent(w.default).setChapter(t), (e.parent = this.pageView.content), this.pages.push(e);
            }
            this.pageView.node.on("scrolling", this.onScrolling, this),
                this.pageView.node.on("scroll-ended", this.showChapterUI, this),
                this.pageView.node.on("scroll-began", this.onScrollBegan, this);
        }),
        (E.prototype.updateView = function () {
            var t = this;
            this.addTop(), this.unscheduleAllCallbacks();
            var e =
                y.default.inst.gameMode == C.GameMode.NORMAL ? y.default.inst.chapter : y.default.inst.chapter - 4e3;
            if (((this.chapter = e), this.mode != y.default.inst.gameMode)) {
                (this.mode = y.default.inst.gameMode), (this.isFirstShow = !0);
                var o = this.pageView.getPages();
                if (y.default.inst.gameMode == C.GameMode.NORMAL) {
                    if (o.length < m.default.inst.chapterConf.getMaxChapter())
                        for (var n = o.length; n < this.pages.length; n++) this.pageView.addPage(this.pages[n]);
                } else if (o.length > m.default.inst.hellConf.maxLen)
                    for (var i = o.length - m.default.inst.hellConf.maxLen, n = 0; n < i; n++)
                        this.pageView.removePageAtIndex(m.default.inst.hellConf.maxLen);
            }
            this.isFirstShow
                ? (this.hideChapterUI(),
                  (this.isFirstShow = !1),
                  1 == e
                      ? this.scheduleOnce(function () {
                            t.showChapterUI(), t.onScrolling();
                        })
                      : this.pageView.setCurrentPageIndex(e - 1))
                : (this.hideChapterUI(), this.pageView.setCurrentPageIndex(e - 1));
        }),
        (E.prototype.addTop = function () {
            y.default.inst.topNode && (y.default.inst.topNode.node.parent = this.top);
        }),
        (E.prototype.onScrollBegan = function () {
            this.hideChapterUI();
        }),
        (E.prototype.onScrolling = function () {
            this.pages.forEach(function (t) {
                var e = t.convertToWorldSpaceAR(cc.v3()),
                    o = Math.abs(e.x - 375),
                    e = cc.misc.clampf(1 - o / 1e3, 0.75, 1);
                (t.scale = e), (t.opacity = 650 < o ? 0 : 255);
            });
        }),
        (E.prototype.hideChapterUI = function () {
            (this.nameBg.active = !1),
                (this.descBg.active = !1),
                (this.btnGet.active = !1),
                (this.skillNode.active = !1),
                (this.skilltip.active = !1);
        }),
        (E.prototype.showChapterUI = function () {
            this._curIdex = this.pageView.getCurrentPageIndex() + 1;
            var t =
                y.default.inst.gameMode == C.GameMode.NORMAL
                    ? f.default.inst.chapter
                    : f.default.inst.hellChapter - 4e3;
            (this.nameBg.active = !0),
                (this.descBg.active = !0),
                (this.btnGet.active = this._curIdex <= t),
                this.nameImg.setSource("texture/chapter/name_" + this._curIdex),
                (function (t) {
                    var e = m.default.inst.chapterConf.getChapterVo(t._curIdex),
                        o = (e && e.map_desc) || "",
                        n;
                    e &&
                        e.unlock_content_id &&
                        (n = U.getUnlockPreview(
                            e.unlock_content_id,
                            f.default.inst.hasUnlockContent(e.unlock_content_id)
                        )) &&
                        (o = o ? o + "\n" + n : n),
                        (t.tipsLab.string = o);
                })(this),
                this.skillUnlock(this._curIdex),
                LA.applyChapterSelect(this);
        }),
        (E.prototype.skillUnlock = function (a) {
            return s(this, void 0, void 0, function () {
                var e,
                    o,
                    n,
                    i,
                    r = this;
                return l(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (
                                ((this.skilltip.active = this.skillNode.active =
                                    !this.btnGet.active && y.default.inst.gameMode != C.GameMode.HELL),
                                this.btnGet.active || y.default.inst.gameMode == C.GameMode.HELL)
                            )
                                return [3, 6];
                            if (null == (e = m.default.inst.playerSkillConf.getOrdinarySkillInfoVo())[a]) return [3, 5];
                            (this.skillNode.active = !0),
                                (this.skillNode.opacity = 0),
                                (this.skilltip.active = this.skillNode.active),
                                (i = 0),
                                (t.label = 1);
                        case 1:
                            return i < e[a].length
                                ? [
                                      4,
                                      _.default.inst.getAsset(
                                          v.ResUtils.Textures.Skillicons.url,
                                          cc.SpriteAtlas,
                                          v.ResUtils.Textures.Skillicons.bundle
                                      )
                                  ]
                                : [3, 4];
                        case 2:
                            (o = t.sent()),
                                (n = m.default.inst.playerSkillConf.getSkillInfoVo(e[a][i].id)),
                                o &&
                                    n &&
                                    ((o = o.getSpriteFrame(n.icon)),
                                    null == this.skillNode.children[i]
                                        ? (((n = cc.instantiate(this.skillPre))
                                              .getChildByName("icon")
                                              .getComponent(cc.Sprite).spriteFrame = o),
                                          this.skillNode.addChild(n),
                                          b.default.inst.rotate(n.getChildByName("xgn_fg"), 3))
                                        : ((this.skillNode.children[i].active = !0),
                                          (this.skillNode.children[i]
                                              .getChildByName("icon")
                                              .getComponent(cc.Sprite).spriteFrame = o))),
                                (t.label = 3);
                        case 3:
                            return i++, [3, 1];
                        case 4:
                            if (e[a].length < this.skillNode.childrenCount)
                                for (i = e[a].length; i < this.skillNode.childrenCount; i++)
                                    this.skillNode.children[i].active = !1;
                            return (
                                this.skillNode.getComponent(cc.Layout).updateLayout(),
                                this.scheduleOnce(function () {
                                    r.skillNode.opacity = 255;
                                }),
                                [3, 6]
                            );
                        case 5:
                            (this.skillNode.active = !1), (this.skilltip.active = this.skillNode.active), (t.label = 6);
                        case 6:
                            return [2];
                    }
                });
            });
        }),
        (E.prototype.onBtnBackClick = function () {
            h.app.gui.openUI(u.UIEnum.HomeView, g.LayerEnum.VIEW_LAYER), h.app.gui.closeUI(u.UIEnum.ChoseChapterView);
        }),
        (E.prototype.onBtnGetClick = function () {
            var ch = this._curIdex | 0;
            ch < 1 && (ch = 1);
            this._curIdex = ch;
            (y.default.inst.chapter =
                y.default.inst.gameMode == C.GameMode.NORMAL ? ch : 4e3 + ch),
                h.app.gui.closeUI(u.UIEnum.ChoseChapterView),
                y.default.inst.playGame(y.default.inst.chapter, !0);
        }),
        r([p.autoBind("cc.PageView", "pageView")], E.prototype, "pageView", void 0),
        r([p.autoBind("cc.Node", "skilltip")], E.prototype, "skilltip", void 0),
        r([p.autoBind("cc.Node", "skillNode")], E.prototype, "skillNode", void 0),
        r([p.autoBind("cc.Node", "skillNode/skill")], E.prototype, "skill", void 0),
        r([p.autoBind("cc.Node", "top")], E.prototype, "top", void 0),
        r([p.autoBind("cc.Node", "nameBg")], E.prototype, "nameBg", void 0),
        r([p.autoBind("cc.Node", "btnBack")], E.prototype, "btnBack", void 0),
        r([p.autoBind("cc.Node", "btnGet")], E.prototype, "btnGet", void 0),
        r([p.autoBind("cc.Node", "descBg")], E.prototype, "descBg", void 0),
        r([p.autoBind("cc.Sprite", "nameBg/nameSp")], E.prototype, "nameSp", void 0),
        r([p.autoBind("cc.Label", "descBg/tipsLab")], E.prototype, "tipsLab", void 0),
        r([t(cc.Prefab)], E.prototype, "skillPre", void 0),
        r([t(cc.Prefab)], E.prototype, "itemPre", void 0),
        r([e], E));
function E() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.pageView = null),
        (t.skilltip = null),
        (t.skillNode = null),
        (t.skill = null),
        (t.top = null),
        (t.nameBg = null),
        (t.btnBack = null),
        (t.btnGet = null),
        (t.descBg = null),
        (t.nameSp = null),
        (t.tipsLab = null),
        (t.skillPre = null),
        (t.itemPre = null),
        (t._curIdex = 0),
        (t.pages = null),
        (t.isFirstShow = !0),
        (t.chapter = 1),
        (t.mode = -1),
        t
    );
}
o.default = e;
