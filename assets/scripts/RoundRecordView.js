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
    c = t("BasePanel"),
    u = t("UIEnum"),
    p = t("decorator"),
    h = t("RecordeItem"),
    d = t("GameMgr"),
    f = t("ConfData"),
    y = t("App"),
    g = t("ResMgr"),
    m = t("ResUtils"),
    _ = t("MultipleController"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (l = c.default),
        i(v, l),
        (v.prototype.initView = function () {
            (this.item.active = !1), this.list.push(this.item.getComponent(h.default));
            for (var t = 1; t < 6; t++) {
                var e = cc.instantiate(this.item);
                (e.parent = this.items),
                    (e.active = !1),
                    this.list.push(e.getComponent(h.default)),
                    (e.position = cc.v3(0, -49 - 108 * t));
            }
        }),
        (v.prototype.updateView = function () {
            return a(this, void 0, void 0, function () {
                var e,
                    o,
                    n,
                    i,
                    r,
                    a = this;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = d.default.inst.getHurtRecord()),
                                (o = 0),
                                this.atlas ? [3, 2] : [4, this.loadAtlas()]
                            );
                        case 1:
                            t.sent(), (t.label = 2);
                        case 2:
                            for (
                                e.forEach(function (t) {
                                    o += t.value;
                                }),
                                    n = 0;
                                n < 6;
                                n++
                            )
                                (i = e[n])
                                    ? ((this.list[n].node.active = !0),
                                      (r = f.default.inst.playerSkillConf.getSkillInfoVo(i.id)),
                                      this.list[n].setData({
                                          name: r.name,
                                          progress: i.value / o,
                                          spf: this.atlas.getSpriteFrame(r.icon)
                                      }))
                                    : (this.list[n].node.active = !1);
                            return (
                                _.default.inst.eject(this.panel, this.bg, function () {
                                    a.onEvent();
                                }),
                                [2]
                            );
                    }
                });
            });
        }),
        (v.prototype.loadAtlas = function () {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [
                                4,
                                g.default.inst.getAsset(
                                    m.ResUtils.Textures.Skillicons.url,
                                    cc.SpriteAtlas,
                                    m.ResUtils.Textures.Skillicons.bundle
                                )
                            ];
                        case 1:
                            return (e = t.sent()), (this.atlas = e), [2];
                    }
                });
            });
        }),
        (v.prototype.onEvent = function () {
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    y.app.gui.closeUI(u.UIEnum.RoundRecordView);
                },
                this
            );
        }),
        (v.prototype.onDisable = function () {
            l.prototype.onDisable.call(this), this.bg.off(cc.Node.EventType.TOUCH_START);
        }),
        (v.prototype.onBtnCloseClick = function () {
            y.app.gui.closeUI(u.UIEnum.RoundRecordView);
        }),
        r([p.autoBind("cc.Node", "panel")], v.prototype, "panel", void 0),
        r([p.autoBind("cc.Node", "panel/items/item")], v.prototype, "item", void 0),
        r([p.autoBind("cc.Node", "btnClose")], v.prototype, "btnClose", void 0),
        r([p.autoBind("cc.Node", "bg")], v.prototype, "bg", void 0),
        r([p.autoBind("cc.Node", "panel/items")], v.prototype, "items", void 0),
        r([t], v));
function v() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.panel = null),
        (t.item = null),
        (t.btnClose = null),
        (t.bg = null),
        (t.items = null),
        (t.list = []),
        (t.atlas = null),
        t
    );
}
o.default = t;
