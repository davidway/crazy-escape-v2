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
    a =
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
    s =
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
var l,
    c,
    u = t("App"),
    p = t("decorator"),
    h = t("LayerMgr"),
    d = t("BasePanel"),
    f = t("EventTypes"),
    y = t("DrawingController"),
    g = t("EquipController"),
    m = t("EvolveController"),
    _ = t("GuideController"),
    v = t("MultipleController"),
    b = t("UserDataController"),
    w = t("ConfData"),
    C = t("GameEnums"),
    k = t("GuideGroup"),
    E = t("MainPageType"),
    S = t("Prop"),
    M = t("TrackType"),
    R = t("UIEnum"),
    T = t("btnEquipBlock"),
    D = t("CloseUI"),
    P = t("Lines"),
    O = t("Font"),
    ECA = t("EquipChestArcade");
((L = l = l || {}).Quality = "按品质排序"),
    (L.Equip = "按部位排序"),
    (L.Level = "按等级排序"),
    ((e = c = c || {})[(e.Quality = 0)] = "Quality"),
    (e[(e.Equip = 1)] = "Equip"),
    (e[(e.Level = 2)] = "Level"),
    (e[(e.id = 3)] = "id");
var A,
    t = cc._decorator,
    L = t.ccclass,
    e = t.property,
    L =
        (t.inspector,
        (A = d.default),
        i(x, A),
        (x.prototype.initView = function () {
            var t;
            null === (t = u.app.track) || void 0 === t || t.trackEvent(M.TrackType.Equip_Page),
                (this.lineNum = 0),
                (this.atk = g.EquipController.inst.showCalcHeroEquipAttr().atk),
                (this.hp = g.EquipController.inst.showCalcHeroEquipAttr().hp),
                v.default.inst.Breathing(this.redPoint, 1.2, 1, 0.9),
                (this.addLableY = this.addLable.y);
        }),
        (x.prototype.updateView = function () {
            (this.content.y = 0),
                this.init(),
                (v.default.inst.nowPage = E.MainPageType.Equip),
                v.default.inst.on(this.node, this),
                ECA.applyEquipsPage(this);
        }),
        (x.prototype.show = function () {}),
        (x.prototype.setAddLeble = function (t) {
            var e = this;
            0 < this.increase &&
                ((this.addLable.active = !0),
                (this.addLable.y = this.addLableY),
                (this.numName.string = t.name + " +"),
                (this.numLab.string = this.increase + ""),
                cc
                    .tween(this.addLable)
                    .to(0.5, {y: this.addLable.y + 50})
                    .call(function () {
                        e.addLable.active = !1;
                    })
                    .start(),
                (this.increase = 0));
        }),
        (x.prototype.setSkin = function () {
            var t = this;
            this.scheduleOnce(function () {
                return a(t, void 0, void 0, function () {
                    var e;
                    return s(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return (
                                    (e = b.default.inst.skin),
                                    (e = w.default.inst.playerSkinConf.getPlayerSkinVoById(e)),
                                    [4, this.hero.setSource(e.url, "actors")]
                                );
                            case 1:
                                return t.sent(), this.hero.setSkin(e.skin_name), this.onBodyAmin(), [2];
                        }
                    });
                });
            });
        }),
        (x.prototype.onBodyAmin = function () {
            var t = this;
            this.playAnim(C.HeroActs.IDLE3, 3, function () {
                return t.playAnim(C.HeroActs.IDLE4, 1, function () {
                    t.onBodyAmin();
                });
            });
        }),
        (x.prototype.playAnim = function (t, e, o) {
            void 0 === e && (e = 3),
                this.hero.setAnimation({
                    act: t,
                    loop: !0,
                    complete: function () {
                        --e <= 0 && o();
                    }
                });
        }),
        (x.prototype.onDisable = function () {
            A.prototype.onDisable.call(this), D.default.inst.closeNode(), v.default.inst.onDestroy(this.node, this);
        }),
        (x.prototype.init = function () {
            this.onEvent(),
                this.showEquips(),
                this.showDrawings(),
                this.setSkin(),
                this.checkRedPoint(),
                this.checkSkinRedPoint();
        }),
        (x.prototype.closeNode = function () {
            D.default.inst.closeNode();
        }),
        (x.prototype.checkRedPoint = function () {
            for (var t = !1, e = 0, o = g.EquipController.inst.getEquips(); e < o.length; e++) {
                var n = o[e];
                if (g.EquipController.inst.canMerge(n.id, n.equipType, n.quality)) {
                    t = !0;
                    break;
                }
            }
            this.redPoint.active = t;
        }),
        (x.prototype.checkSkinRedPoint = function () {
            this.skin_redPoint.active = b.default.inst.checkSkinRedPoint();
        }),
        (x.prototype.showEquips = function () {
            return a(this, void 0, void 0, function () {
                var t, e, o;
                return s(this, function () {
                    return (
                        (o = null == this.equipsList),
                        (this.addLable.active = !1),
                        (this.equipsList = g.EquipController.inst.getEquips()),
                        o && (console.log("首次排序"), this.sort(3), this.sort(2), this.sort(1), this.sort(0)),
                        this.sort(this.sortIcon),
                        console.log(this.equipsList, this.equipsList.length),
                        this.addOnceLine(),
                        (e = b.default.inst.skin),
                        (t = w.default.inst.playerSkinConf.getPlayerSkinVoById(e)),
                        (o = m.default.inst.getShowTalent()),
                        (e = 10 * t.attack + o.Atk),
                        (o = 10 * t.hp + o.Hp),
                        this.atk + e < g.EquipController.inst.showCalcHeroEquipAttr().atk + e &&
                            (this.increase = g.EquipController.inst.showCalcHeroEquipAttr().atk + e - (this.atk + e)),
                        O.default
                            .getFon()
                            .roll(this.attackLab, this.atk + e, g.EquipController.inst.showCalcHeroEquipAttr().atk + e),
                        (this.atk = g.EquipController.inst.showCalcHeroEquipAttr().atk),
                        this.hp + o < g.EquipController.inst.showCalcHeroEquipAttr().hp + o &&
                            (this.increase = g.EquipController.inst.showCalcHeroEquipAttr().hp + o - (this.hp + o)),
                        O.default
                            .getFon()
                            .roll(this.hpLab, this.hp + o, g.EquipController.inst.showCalcHeroEquipAttr().hp + o),
                        (this.hp = g.EquipController.inst.showCalcHeroEquipAttr().hp),
                        this.showGuide(),
                        [2]
                    );
                });
            });
        }),
        (x.prototype.addOnceLine = function () {
            return a(this, void 0, void 0, function () {
                var e, o, n, i, r, a;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if ((e = 0) == this.equipsList.length) return [3, 8];
                            (n = []), (r = i = o = 0), (t.label = 1);
                        case 1:
                            return r < this.equipsList.length
                                ? 1 != this.equipsList[r].status
                                    ? [3, 5]
                                    : (e++,
                                      r == this.equipsList.length - 1 &&
                                          0 < n.length &&
                                          (i++,
                                          this.addLine(this.equips, {oneEquipsList: n}, S.Prop.equip, i),
                                          (this.nowEquipsLines = this.countLine(this.equips, this.nowEquipsLines, i))),
                                      0 !=
                                      this.blockNode.getChildByName("" + this.equipsList[r].equipType).childrenCount
                                          ? [3, 3]
                                          : [
                                                4,
                                                (a = cc.instantiate(this.btnEquipBlock))
                                                    .getComponent(T.default)
                                                    .setData(this.equipsList[r])
                                            ])
                                : [3, 7];
                        case 2:
                            return (
                                t.sent(),
                                this.blockNode.getChildByName("" + this.equipsList[r].equipType).addChild(a),
                                [3, 4]
                            );
                        case 3:
                            this.blockNode
                                .getChildByName("" + this.equipsList[r].equipType)
                                .children[0].getComponent(T.default)
                                .setData(this.equipsList[r]),
                                (this.blockNode.getChildByName("" + this.equipsList[r].equipType).children[0].active =
                                    !0),
                                (t.label = 4);
                        case 4:
                            return [3, 6];
                        case 5:
                            (n[o] = this.equipsList[r]),
                                5 == ++o &&
                                    ((o = 0),
                                    i++,
                                    this.addLine(this.equips, {oneEquipsList: n}, S.Prop.equip, i),
                                    (n = [])),
                                this.equipsList.length - r <= (this.equipsList.length - e) % 5 &&
                                    0 != o &&
                                    r == this.equipsList.length - 1 &&
                                    0 < n.length &&
                                    (i++, this.addLine(this.equips, {oneEquipsList: n}, S.Prop.equip, i)),
                                (t.label = 6);
                        case 6:
                            return r++, [3, 1];
                        case 7:
                            0 == i &&
                                this.equips.children[0] &&
                                (console.log("隐藏最后一列"), (this.equips.children[0].active = !1)),
                                (this.nowEquipsLines = this.countLine(this.equips, this.nowEquipsLines, i)),
                                console.log("this.nowEquipsLines==>", this.nowEquipsLines, i),
                                this.runFun(),
                                this.schedule(this.runFun, 1 / 60),
                                (t.label = 8);
                        case 8:
                            return [2];
                    }
                });
            });
        }),
        (x.prototype.showGuide = function () {
            var o;
            return a(this, void 0, void 0, function () {
                var e = this;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return _.GuideController.guideVo
                                ? (61 == (null === (o = _.GuideController.guideVo) || void 0 === o ? void 0 : o.idx) &&
                                      this.scheduleOnce(function () {
                                          _.GuideController.guideStart();
                                      }, 0.2),
                                  [3, 3])
                                : [3, 1];
                        case 1:
                            return 0 != _.GuideController.getGuide("Equipment")
                                ? [3, 3]
                                : [4, _.GuideController.initGroup(k.GuideGroup.Equipment)];
                        case 2:
                            t.sent(),
                                this.scheduleOnce(function () {
                                    var t;
                                    _.GuideController.guideNext(),
                                        4 ==
                                            (null === (t = _.GuideController.guideVo) || void 0 === t
                                                ? void 0
                                                : t.idx) &&
                                            (0 == e.equipsList.length
                                                ? (_.GuideController.setGuide("Equipment", 1),
                                                  _.GuideController.guideNext())
                                                : _.GuideController.guideStart());
                                }, 0.5),
                                (t.label = 3);
                        case 3:
                            return [2];
                    }
                });
            });
        }),
        (x.prototype.attributeChange = function () {}),
        (x.prototype.showDrawings = function () {
            this.drawingList = y.DrawingController.inst.getDrawings();
            for (var t = 0, e = [], o = 0, n = 0; n < this.drawingList.length; n++)
                0 != this.drawingList[n].quantity
                    ? ((e[t] = this.drawingList[n]),
                      5 == ++t &&
                          ((t = 0), this.addLine(this.blocks, {oneDrawingList: e}, S.Prop.drawing, ++o), (e = [])),
                      n == this.drawingList.length - 1 &&
                          0 != t &&
                          n == this.drawingList.length - 1 &&
                          0 < e.length &&
                          this.addLine(this.blocks, {oneDrawingList: e}, S.Prop.drawing, ++o))
                    : n == this.drawingList.length - 1 &&
                      0 < e.length &&
                      (this.addLine(this.blocks, {oneDrawingList: e}, S.Prop.drawing, ++o),
                      (this.nowDrawingsLines = this.countLine(this.blocks, this.nowDrawingsLines, o)));
            this.nowDrawingsLines = this.countLine(this.blocks, this.nowDrawingsLines, o);
        }),
        (x.prototype.countLine = function (t, e, o) {
            var n,
                i = this;
            return (
                0 == e
                    ? (e = o)
                    : (n = function () {
                          o < e ? (i.delLine(t, e), e--, console.log("减一行"), n()) : e <= o && (e = o);
                      })(),
                e
            );
        }),
        (x.prototype.sort = function (t) {
            function e(o) {
                n.equipsList.sort(function (t, e) {
                    return t[i] < e[i] ? -1 * o : t[i] > e[i] ? +o : 0;
                });
            }
            var n = this,
                i = "";
            switch (t) {
                case c.Quality:
                    (i = "quality"), (this.sortTypeLab.string = l.Quality), e(-1);
                    break;
                case c.Equip:
                    (i = "equipType"), (this.sortTypeLab.string = l.Equip), e(1);
                    break;
                case c.Level:
                    (i = "level"), (this.sortTypeLab.string = l.Level), e(-1);
                    break;
                case c.id:
                    (i = "id"), e(-1);
            }
        }),
        (x.prototype.onEvent = function () {
            this.content.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    D.default.inst.closeNode();
                },
                this
            );
        }),
        (x.prototype.onDestroy = function () {}),
        (x.prototype.getLine = function () {
            return this.line;
        }),
        (x.prototype.addLine = function (o, n, i, r) {
            var a = this;
            this.funList.push(function () {
                var t,
                    e = null;
                null == o.children[r - 1]
                    ? ((e = cc.instantiate(a.getLine())),
                      i == S.Prop.equip
                          ? e.getComponent(P.default).setBlock(n.oneEquipsList, i)
                          : e.getComponent(P.default).setBlock(n.oneDrawingList, i),
                      (t = cc.v2(0, 0)),
                      0 != o.childrenCount && (t = o.children[o.childrenCount - 1].getPosition()),
                      e.setPosition(t.x, t.y + e.height),
                      (o.height += a.lineHeght),
                      o.addChild(e),
                      a.addContent(),
                      e.children.forEach(function (t) {
                          t.active = !1;
                      }))
                    : ((e = o.children[r - 1]).active || a.addContent(),
                      (e.active = !0),
                      i == S.Prop.equip
                          ? e.getComponent(P.default).setBlock(n.oneEquipsList, i)
                          : e.getComponent(P.default).setBlock(n.oneDrawingList, i));
            });
        }),
        (x.prototype.runFun = function () {
            0 < this.funList.length ? this.funList.shift()() : this.unschedule(this.runFun);
        }),
        (x.prototype.delLine = function (t, e) {
            0 < t.childrenCount &&
                ((t.children[e - 1].active = !1), (t.height -= this.lineHeght), this.reduceContent());
        }),
        (x.prototype.addContent = function () {
            this.lineNum++, 3 < this.lineNum && (this.content.height += this.lineHeght);
        }),
        (x.prototype.reduceContent = function () {
            this.lineNum--, 2 < this.lineNum && (this.content.height -= this.lineHeght);
        }),
        (x.prototype.removingEquips = function (t) {
            this.blockNode.getChildByName("" + t).children[0].active = !1;
        }),
        (x.prototype.onEquipsAddLable = function (t) {
            this.setAddLeble(t);
        }),
        (x.prototype.onEquipsSkin = function () {
            this.setSkin();
        }),
        (x.prototype.onEquipsChange = function () {
            this.showEquips();
        }),
        (x.prototype.onDrawingsChange = function () {
            this.showDrawings();
        }),
        (x.prototype.onRemovingEquips = function (t) {
            this.removingEquips(t);
        }),
        (x.prototype.onBtnSortClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function () {
                    return (
                        D.default.inst.closeNode(),
                        this.sortIcon++,
                        3 == this.sortIcon && (this.sortIcon = 0),
                        this.sort(this.sortIcon),
                        u.app.event.emit(f.EventType.Equips_Change),
                        [2]
                    );
                });
            });
        }),
        (x.prototype.onBtnSynthesClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                D.default.inst.closeNode(),
                                [4, u.app.gui.openUI(R.UIEnum.EquipMergeView, h.LayerEnum.VIEW_LAYER)]
                            );
                        case 1:
                            return t.sent(), u.app.gui.closeUI(R.UIEnum.HomeView), [2];
                    }
                });
            });
        }),
        (x.prototype.onBtnSkinClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                D.default.inst.closeNode(),
                                [4, u.app.gui.openUI(R.UIEnum.HeroView, h.LayerEnum.VIEW_LAYER)]
                            );
                        case 1:
                            return t.sent(), u.app.gui.closeUI(R.UIEnum.HomeView), [2];
                    }
                });
            });
        }),
        r(
            [p.autoBind("cc.Node", "ScrollView/view/content/wear/content/attribute/addLableNode/addLable")],
            x.prototype,
            "addLable",
            void 0
        ),
        r(
            [p.autoBind("cc.Label", "ScrollView/view/content/wear/content/attribute/addLableNode/addLable/numName")],
            x.prototype,
            "numName",
            void 0
        ),
        r(
            [p.autoBind("cc.Label", "ScrollView/view/content/wear/content/attribute/addLableNode/addLable/numLab")],
            x.prototype,
            "numLab",
            void 0
        ),
        r([p.autoBind("cc.Node", "ScrollView/view/content/wear/content/btnSkin")], x.prototype, "btnSkin", void 0),
        r(
            [p.autoBind("cc.Node", "ScrollView/view/content/wear/content/btnSkin/skin_redPoint")],
            x.prototype,
            "skin_redPoint",
            void 0
        ),
        r(
            [p.autoBind("cc.Label", "ScrollView/view/content/btn/content/btnSort/Background/sortTypeLab")],
            x.prototype,
            "sortTypeLab",
            void 0
        ),
        r(
            [p.autoBind("cc.Node", "ScrollView/view/content/btn/content/btnSynthes/redPoint")],
            x.prototype,
            "redPoint",
            void 0
        ),
        r([p.autoBind("CCSkeleton", "ScrollView/view/content/wear/content/role/hero")], x.prototype, "hero", void 0),
        r(
            [p.autoBind("cc.Node", "ScrollView/view/content/btn/content/btnSort/Background/sortType")],
            x.prototype,
            "sortType",
            void 0
        ),
        r(
            [p.autoBind("cc.Label", "ScrollView/view/content/wear/content/attribute/lable/hpLab")],
            x.prototype,
            "hpLab",
            void 0
        ),
        r(
            [p.autoBind("cc.Label", "ScrollView/view/content/wear/content/attribute/lable/attackLab")],
            x.prototype,
            "attackLab",
            void 0
        ),
        r(
            [p.autoBind("cc.Node", "ScrollView/view/content/knapsack/Layout/draws/blocks")],
            x.prototype,
            "blocks",
            void 0
        ),
        r([p.autoBind("cc.Node", "ScrollView/view/content")], x.prototype, "content", void 0),
        r([p.autoBind("cc.Node", "ScrollView/view/content/knapsack/Layout/equips")], x.prototype, "equips", void 0),
        r([p.autoBind("cc.Node", "ScrollView/view/content/btn/content/btnSort")], x.prototype, "btnSort", void 0),
        r([p.autoBind("cc.Node", "ScrollView/view/content/btn/content/btnSynthes")], x.prototype, "btnSynthes", void 0),
        r(
            [p.autoBind("cc.Node", "ScrollView/view/content/wear/content/equips/blockNode")],
            x.prototype,
            "blockNode",
            void 0
        ),
        r([e(cc.Prefab)], x.prototype, "line", void 0),
        r([e(cc.Prefab)], x.prototype, "btnEquipBlock", void 0),
        r([e([cc.SpriteFrame])], x.prototype, "sortIcons", void 0),
        r([p.gameEvent(f.EventType.Equips_AddLable)], x.prototype, "onEquipsAddLable", null),
        r([p.gameEvent(f.EventType.Equips_Skin)], x.prototype, "onEquipsSkin", null),
        r([p.gameEvent(f.EventType.Equips_Change)], x.prototype, "onEquipsChange", null),
        r([p.gameEvent(f.EventType.Drawings_Change)], x.prototype, "onDrawingsChange", null),
        r([p.gameEvent(f.EventType.Removing_Equips)], x.prototype, "onRemovingEquips", null),
        r([L], x));
function x() {
    var t = (null !== A && A.apply(this, arguments)) || this;
    return (
        (t.addLable = null),
        (t.numName = null),
        (t.numLab = null),
        (t.btnSkin = null),
        (t.skin_redPoint = null),
        (t.sortTypeLab = null),
        (t.redPoint = null),
        (t.hero = null),
        (t.sortType = null),
        (t.hpLab = null),
        (t.attackLab = null),
        (t.blocks = null),
        (t.content = null),
        (t.equips = null),
        (t.btnSort = null),
        (t.btnSynthes = null),
        (t.blockNode = null),
        (t.line = null),
        (t.btnEquipBlock = null),
        (t.sortIcons = []),
        (t.sortIcon = 0),
        (t.lineNum = 0),
        (t.lineHeght = 150),
        (t.drawingList = []),
        (t.equipsList = null),
        (t.nowEquipsLines = 0),
        (t.nowDrawingsLines = 0),
        (t.atk = 0),
        (t.hp = 0),
        (t.funList = []),
        (t.addLableY = 0),
        (t.increase = 0),
        t
    );
}
o.default = L;
