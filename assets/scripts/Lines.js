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
    u = t("decorator"),
    p = t("btnEquipBlock"),
    h = t("Prop"),
    d = t("btnDrawBlock"),
    f = cc._decorator,
    e = f.ccclass,
    t = f.property,
    e =
        (f.inspector,
        (a = c.default),
        i(y, a),
        (y.prototype.initView = function () {}),
        (y.prototype.updateView = function () {}),
        (y.prototype.setBlock = function (t, e) {
            var o = null;
            switch ((this.type = e)) {
                case h.Prop.equip:
                    o = this.btnEquipBlock;
                    break;
                case h.Prop.drawing:
                    o = this.btnDrawBlock;
            }
            null != t && this.addblock(o, t);
        }),
        (y.prototype.addblock = function (i, r) {
            var a;
            return s(this, void 0, void 0, function () {
                var e, o, n;
                return l(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (r.length < 5)
                                for (e = 4; e > r.length - 1; e--)
                                    null != this.node.children[e].children[0] &&
                                        (this.node.children[e].children[0].active = !1),
                                        (this.node.children[e].active = !0);
                            (e = 0), (t.label = 1);
                        case 1:
                            if (!(e < r.length)) return [3, 8];
                            if (
                                ((o = 1),
                                null !== (a = r[e].profit) && void 0 !== a && a.Layout && (o = r[e].profit.Layout),
                                null != this.node.children[e].children[0])
                            )
                                return [3, 6];
                            switch (((n = cc.instantiate(i)), this.type)) {
                                case h.Prop.equip:
                                    return [3, 2];
                                case h.Prop.drawing:
                                    return [3, 4];
                            }
                            return [3, 5];
                        case 2:
                            return [4, n.getComponent(p.default).setData(r[e])];
                        case 3:
                            return t.sent(), [3, 5];
                        case 4:
                            null != r[e].type
                                ? n.getComponent(d.default).setData(r[e].profit, r[e].type, !1, o)
                                : n.getComponent(d.default).setData({draw: r[e]}, h.Prop.drawing, !1, o),
                                (t.label = 5);
                        case 5:
                            return this.node.children[e].addChild(n), [3, 7];
                        case 6:
                            switch (this.type) {
                                case h.Prop.equip:
                                    this.node.children[e].children[0].getComponent(p.default).setData(r[e]);
                                    break;
                                case h.Prop.drawing:
                                    null != r[e].type
                                        ? this.node.children[e].children[0]
                                              .getComponent(d.default)
                                              .setData(r[e].profit, r[e].type, !1, o)
                                        : this.node.children[e].children[0]
                                              .getComponent(d.default)
                                              .setData({draw: r[e]}, h.Prop.drawing, !1, o);
                            }
                            t.label = 7;
                        case 7:
                            return e++, [3, 1];
                        case 8:
                            return [2];
                    }
                });
            });
        }),
        (y.prototype.onCollisionEnter = function () {}),
        r([u.autoBind("cc.Node", "Nodes")], y.prototype, "Nodes", void 0),
        r([t(cc.Prefab)], y.prototype, "btnEquipBlock", void 0),
        r([t(cc.Prefab)], y.prototype, "btnDrawBlock", void 0),
        r([e], y));
function y() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.Nodes = null), (t.btnEquipBlock = null), (t.btnDrawBlock = null), (t.type = h.Prop.equip), t;
}
o.default = e;
