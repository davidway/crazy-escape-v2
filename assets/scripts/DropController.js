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
var r,
    h = t("ResMgr"),
    e = t("Singleton"),
    d = t("MathUtil"),
    c = t("ResUtils"),
    f = t("GameEnums"),
    y = t("DropType"),
    g = t("Drop"),
    m = t("GameMgr"),
    _ = t("HeroController"),
    a = t("Exp"),
    u = t("GameController"),
    p = t("ArrayUtil"),
    v = t("App"),
    i =
        ((r = e.Singleton()),
        i(b, r),
        (b.prototype.setLayer = function (t, e) {
            return s(this, void 0, void 0, function () {
                return l(this, function () {
                    return (
                        (this.dropLayer = t),
                        (this.floatLayer = e),
                        (this.expLayer = new cc.Node("expLayer")),
                        (this.expLayer.parent = this.dropLayer),
                        (this.itemLayer = new cc.Node("itemLayer")),
                        (this.itemLayer.parent = this.dropLayer),
                        (this.boxLayer = new cc.Node("boxLayer")),
                        (this.boxLayer.parent = this.dropLayer),
                        (this.jumpLayer = new cc.Node("jumpLayer")),
                        (this.jumpLayer.parent = this.dropLayer),
                        [2]
                    );
                });
            });
        }),
        (b.prototype.getExpNum = function () {
            return this.expLayer.childrenCount;
        }),
        (b.prototype.getBoxNum = function () {
            return this.boxLayer.childrenCount;
        }),
        (b.prototype.getItemNum = function () {
            var e = this.itemLayer.childrenCount,
                o = [y.DropType.Bomb, y.DropType.Magnet, y.DropType.Smked, y.DropType.Gold];
            return (
                this.awaitList.forEach(function (t) {
                    o.includes(t.type) && (e = 1);
                }),
                e
            );
        }),
        (b.prototype.getBoxs = function () {
            return this.boxLayer.children;
        }),
        (b.prototype.getBoxPos = function () {
            var e = [];
            return (
                this.boxList.forEach(function (t) {
                    e.push(t.comp.node.position);
                }),
                e
            );
        }),
        (b.prototype.canDropItem = function () {
            var t = m.default.inst.chapterVo;
            return !(t && t.map_drop_num < b.inst.getItemNum());
        }),
        (b.prototype.hasBoxOrItem = function (e) {
            var o = !1;
            return (
                this.boxList.forEach(function (t) {
                    e == t.index && (o = !0);
                }),
                o ||
                    this.itemList.forEach(function (t) {
                        e == t && (o = !0);
                    }),
                o
            );
        }),
        (b.prototype.addDrop = function (t) {
            this.awaitList.push(t);
        }),
        (b.prototype.delDrop = function (t) {
            this.closeList.push(t.node.uuid), this.boxList.delete(t.node.uuid), this.itemList.delete(t.node.uuid);
        }),
        (b.prototype.collectAllExp = function () {
            var t = p.default.clone(this.expLayer.children);
            v.app.sound.playEffect("磁铁吸金币音效");
            for (var e = 0, o = t; e < o.length; e++) {
                var n = o[e];
                this.collect(n);
            }
            (t.length = 0), (this.pickUpList.length = 0);
        }),
        (b.prototype.allBoxBroken = function () {
            this.boxList.forEach(function (t) {
                t.comp.broken();
            });
        }),
        (b.prototype.addExp = function (o) {
            return s(this, void 0, void 0, function () {
                var e;
                return l(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (400 <= (e = this.getExpNum()) && 10 < d.default.randomRangeInt(0, 100)) ||
                                (250 <= e && 40 < d.default.randomRangeInt(0, 100))
                                ? [2]
                                : [
                                      4,
                                      h.default.inst.getNodeFromPool(
                                          c.ResUtils.Prefabs.Exp.url,
                                          c.ResUtils.Prefabs.Exp.bundle
                                      )
                                  ];
                        case 1:
                            return (
                                ((e = t.sent()).position = o.pt),
                                e.getComponent(a.default).setData({type: o.type, value: o.value}),
                                (e.parent = this.expLayer),
                                [2]
                            );
                    }
                });
            });
        }),
        (b.prototype.addBox = function (t, n) {
            return s(this, void 0, void 0, function () {
                var e, o;
                return l(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                ((o = {url: "", bundle: ""}).url = c.ResUtils.Prefabs.Box.url),
                                (o.bundle = c.ResUtils.Prefabs.Box.bundle),
                                [4, h.default.inst.getNodeFromPool(o.url, o.bundle)]
                            );
                        case 1:
                            return (
                                ((e = t.sent()).position = n.pt),
                                (o = e.getComponent(g.default)),
                                (e.parent = this.boxLayer),
                                o.setData({type: n.type, value: n.value, id: n.id, quality: n.quality, index: n.index}),
                                n.index && this.boxList.set(e.uuid, {comp: o, index: n.index}),
                                [2]
                            );
                    }
                });
            });
        }),
        (b.prototype.addItem = function (r, a) {
            return s(this, void 0, void 0, function () {
                var e,
                    o,
                    n,
                    i = this;
                return l(this, function (t) {
                    switch (t.label) {
                        case 0:
                            switch (((e = {url: "", bundle: ""}), r)) {
                                case y.DropType.Chest:
                                    (e.url = c.ResUtils.Prefabs.Chest.url),
                                        (e.bundle = c.ResUtils.Prefabs.Chest.bundle);
                                    break;
                                case y.DropType.Bomb:
                                    (e.url = c.ResUtils.Prefabs.Bomb.url), (e.bundle = c.ResUtils.Prefabs.Bomb.bundle);
                                    break;
                                case y.DropType.Magnet:
                                    (e.url = c.ResUtils.Prefabs.Magnet.url),
                                        (e.bundle = c.ResUtils.Prefabs.Magnet.bundle);
                                    break;
                                case y.DropType.Smked:
                                    (e.url = c.ResUtils.Prefabs.Smked.url),
                                        (e.bundle = c.ResUtils.Prefabs.Smked.bundle);
                                    break;
                                case y.DropType.Gold:
                                    (e.url = c.ResUtils.Prefabs.Gold.url), (e.bundle = c.ResUtils.Prefabs.Gold.bundle);
                                    break;
                                case y.DropType.Equip:
                                    (e.url = c.ResUtils.Prefabs.Equip.url),
                                        (e.bundle = c.ResUtils.Prefabs.Equip.bundle);
                                    break;
                                case y.DropType.Drawing:
                                    (e.url = c.ResUtils.Prefabs.Drawing.url),
                                        (e.bundle = c.ResUtils.Prefabs.Drawing.bundle);
                                    break;
                                case y.DropType.Goods:
                                    if (null == a.id) return [2];
                                    (e.url = c.ResUtils.Prefabs.Goods.url),
                                        (e.bundle = c.ResUtils.Prefabs.Goods.bundle);
                            }
                            return [4, h.default.inst.getNodeFromPool(e.url, e.bundle)];
                        case 1:
                            return (
                                ((o = t.sent()).position = a.pt),
                                (n = o.getComponent(g.default)).setData({
                                    type: a.type,
                                    value: a.value,
                                    id: a.id,
                                    quality: a.quality,
                                    index: a.index
                                }),
                                (o.parent = this.jumpLayer),
                                n.jump(function () {
                                    o.parent = i.itemLayer;
                                }),
                                a.index && this.itemList.set(o.uuid, a.index),
                                [2]
                            );
                    }
                });
            });
        }),
        (b.prototype.createDrop = function () {
            return s(this, void 0, void 0, function () {
                var e, o, n, i;
                return l(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (0 == this.awaitList.length) return [2];
                            (e = this.awaitList.splice(0, 20)), (o = 0), (n = e.length), (t.label = 1);
                        case 1:
                            return o < n
                                ? (i = e[o]).type != y.DropType.Exp
                                    ? [3, 3]
                                    : [4, this.addExp(i.data)]
                                : [3, 8];
                        case 2:
                            return t.sent(), [3, 7];
                        case 3:
                            return i.type != y.DropType.Box ? [3, 5] : [4, this.addBox(i.type, i.data)];
                        case 4:
                            return t.sent(), [3, 7];
                        case 5:
                            return [4, this.addItem(i.type, i.data)];
                        case 6:
                            t.sent(), (t.label = 7);
                        case 7:
                            return o++, [3, 1];
                        case 8:
                            return [2];
                    }
                });
            });
        }),
        (b.prototype.collect = function (t) {
            var e;
            t &&
                ((e = t.getComponent(g.default))
                    ? ((t.parent = this.floatLayer), e.setPos(t.position), this.flyList.set(t.uuid, e))
                    : console.error("没有绑定掉落类：", t.name));
        }),
        (b.prototype.onUpdate = function (e) {
            var o = this;
            if (!m.default.inst.onStatus(f.GameStatus.PAUSE | f.GameStatus.OVER)) {
                if (
                    (this.createDrop(),
                    0 < this.closeList.length &&
                        (this.closeList.forEach(function (t) {
                            var e = o.flyList.get(t);
                            e && h.default.inst.putNodeToPool(e.node), o.flyList.delete(t);
                        }),
                        (this.closeList.length = 0)),
                    (this.sort_delay -= e),
                    this.sort_delay <= 0)
                ) {
                    (this.sort_delay = 0.5), (this.pickUpList.length = 0);
                    for (
                        var t = _.HeroController.getHeroCenter(),
                            n = _.HeroController.getHeroPickUpDis() + 120,
                            i = 0,
                            r = this.expLayer.children;
                        i < r.length;
                        i++
                    ) {
                        var a = r[i];
                        d.default.pointInCircle(a.position, t, n) && this.pickUpList.push(a);
                    }
                    for (var s = 0, l = this.itemLayer.children; s < l.length; s++)
                        (a = l[s]).getComponent(g.default).type != y.DropType.Box &&
                            d.default.pointInCircle(a.position, t, n) &&
                            this.pickUpList.push(a);
                }
                if (0 < this.pickUpList.length) {
                    for (
                        var t = _.HeroController.getHeroCenter(),
                            n = _.HeroController.getHeroPickUpDis(),
                            c = [],
                            u = 0,
                            p = this.pickUpList;
                        u < p.length;
                        u++
                    )
                        (a = p[u]),
                            d.default.pointInCircle(a.position, t, n)
                                ? (this.collect(a), a.getComponent(g.default))
                                : c.push(a);
                    this.pickUpList = c;
                }
                this.flyList.forEach(function (t) {
                    t.onUpdate(e);
                }),
                    (this.check_delay -= e),
                    this.check_delay <= 0 && ((this.check_delay = 2), this.checkExp());
            }
        }),
        (b.prototype.clear = function () {
            for (var t = 0, e = this.expLayer.childrenCount; t < e; t++)
                h.default.inst.putNodeToPool(this.expLayer.children[0]);
            for (t = 0, e = this.itemLayer.childrenCount; t < e; t++)
                h.default.inst.putNodeToPool(this.itemLayer.children[0]);
            for (t = 0, e = this.boxLayer.childrenCount; t < e; t++)
                h.default.inst.putNodeToPool(this.boxLayer.children[0]);
            for (t = 0, e = this.floatLayer.childrenCount; t < e; t++)
                h.default.inst.putNodeToPool(this.floatLayer.children[0]);
            this.boxList.clear(),
                this.itemList.clear(),
                this.flyList.clear(),
                (this.closeList.length = 0),
                (this.awaitList.length = 0),
                (this.pickUpList.length = 0);
        }),
        (b.prototype.checkExp = function () {
            if (m.default.inst.chapterVo.map_type != f.MapType.LIMIT_MAP)
                for (var t = cc.v3(), e = 0, o = this.expLayer.children; e < o.length; e++) {
                    var n = o[e];
                    d.default.copy(t, n.position);
                    var i = u.GameController.inst.checkRepeat(t);
                    i.isNewPos &&
                        ((i.pos.x += d.default.randomRangeInt(-100, 100)),
                        (i.pos.y += d.default.randomRangeInt(-200, 200)),
                        n.setPosition(i.pos));
                }
        }),
        b);
function b() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (
        (t.expLayer = null),
        (t.itemLayer = null),
        (t.boxLayer = null),
        (t.jumpLayer = null),
        (t.dropLayer = null),
        (t.floatLayer = null),
        (t.pickUpList = []),
        (t.sort_delay = 0),
        (t.visible_delay = 0),
        (t.closeList = []),
        (t.flyList = new Map()),
        (t.awaitList = []),
        (t.boxList = new Map()),
        (t.itemList = new Map()),
        (t.check_delay = 2),
        t
    );
}
o.default = i;
