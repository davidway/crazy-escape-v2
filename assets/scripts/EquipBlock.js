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
    c = t("App"),
    u = t("ResMgr"),
    p = t("BaseUI"),
    h = t("EventTypes"),
    d = t("MultipleController"),
    f = t("ConfData"),
    y = t("IUserEquipVo"),
    g = t("EquipType"),
    ECA = t("EquipChestArcade"),
    m = cc._decorator,
    e = m.ccclass,
    t = m.property,
    e =
        (m.inspector,
        (l = p.default),
        i(_, l),
        Object.defineProperty(_.prototype, "selected", {
            set: function (t) {
                var e = this;
                this.selectedFlag && (this.selectedFlag.active = t);
                var o = t ? cc.Color.WHITE.fromHEX("#787878") : cc.Color.WHITE;
                this.childs.forEach(function (t) {
                    t != e.selectedFlag && (t.color = o);
                });
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(_.prototype, "isRed", {
            set: function (t) {
                this.redPoint && (this.redPoint.active = t);
            },
            enumerable: !1,
            configurable: !0
        }),
        (_.prototype.findChilds = function (t) {
            this.childs.push(t);
            for (var e = 0; e < t.childrenCount; e++) {
                var o = t.children[e];
                "Layout" != t.name && this.childs.push(o), 0 < o.childrenCount && this.findChilds(o);
            }
        }),
        (_.prototype.onLoad = function () {
            this.equipTypeMap.set(g.EquipType.WEAPONS, this.miniIcons[0]),
                this.equipTypeMap.set(g.EquipType.ARMOR, this.miniIcons[5]),
                this.equipTypeMap.set(g.EquipType.NECKLACE, this.miniIcons[2]),
                this.equipTypeMap.set(g.EquipType.BELT, this.miniIcons[1]),
                this.equipTypeMap.set(g.EquipType.GLOVES, this.miniIcons[4]),
                this.equipTypeMap.set(g.EquipType.WAR_SHOES, this.miniIcons[3]),
                this.findChilds(this.node),
                d.default.inst.Breathing(this.redPoint, 1.2, 1, 0.9);
        }),
        (_.prototype.onEnable = function () {
            this.on(this.node, this.onNodeClick, this);
        }),
        (_.prototype.onDisable = function () {
            this.off(this.node);
        }),
        (_.prototype.setData = function (t) {
            (this._data = t), this.updateView(), (this.selected = !1), (this.isRed = !1);
        }),
        (_.prototype.getData = function () {
            return this._data;
        }),
        (_.prototype.updateView = function () {
            (this.lv.string = "" + this._data.level),
                (this.btnBg.spriteFrame = this.bgs[this._data.quality - 1]),
                (this.diamond.spriteFrame = this.diamonds[this._data.quality - 1]),
                (this.miniIcon.spriteFrame = this.equipTypeMap.get(this._data.equipType)),
                this.getIcon(),
                this.onFlag && (this.onFlag.active = this._data.status == y.EquipStatus.ON),
                ECA.applyEquipBlock(this);
        }),
        (_.prototype.getIcon = function () {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = f.default.inst.equipConf.getEquipQualityVo(this._data.id, this._data.quality)),
                                [4, u.default.inst.getAsset("equips/" + e.icon, cc.Texture2D)]
                            );
                        case 1:
                            return (e = t.sent()), (this.icon.spriteFrame = new cc.SpriteFrame(e)), [2];
                    }
                });
            });
        }),
        (_.prototype.onNodeClick = function () {
            c.app.event.emit(h.EventType.On_EquipBlock_Click, this);
        }),
        r([t(cc.Label)], _.prototype, "lv", void 0),
        r([t(cc.Sprite)], _.prototype, "icon", void 0),
        r([t(cc.Node)], _.prototype, "selectedFlag", void 0),
        r([t(cc.Node)], _.prototype, "onFlag", void 0),
        r([t(cc.Node)], _.prototype, "redPoint", void 0),
        r([t(cc.Sprite)], _.prototype, "btnBg", void 0),
        r([t(cc.Sprite)], _.prototype, "diamond", void 0),
        r([t(cc.Sprite)], _.prototype, "miniIcon", void 0),
        r([t([cc.SpriteFrame])], _.prototype, "bgs", void 0),
        r([t([cc.SpriteFrame])], _.prototype, "diamonds", void 0),
        r([t([cc.SpriteFrame])], _.prototype, "miniIcons", void 0),
        r([e], _));
function _() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.lv = null),
        (t.icon = null),
        (t.selectedFlag = null),
        (t.onFlag = null),
        (t.redPoint = null),
        (t.btnBg = null),
        (t.diamond = null),
        (t.miniIcon = null),
        (t.bgs = []),
        (t.diamonds = []),
        (t.miniIcons = []),
        (t._data = null),
        (t.equipTypeMap = new Map()),
        (t.childs = []),
        t
    );
}
o.default = e;
