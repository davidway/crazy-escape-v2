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
    a =
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
Object.defineProperty(o, "__esModule", {value: !0}), (o.DrawingController = void 0);
var s,
    l = t("App"),
    e = t("Singleton"),
    c = t("EventTypes"),
    u = t("ConfData"),
    p = t("Prop"),
    i =
        ((s = e.Singleton()),
        i(h, s),
        (h.prototype.initDrawing = function () {
            (this.drawings = l.app.local.getValue("drawing")),
                console.log(this.drawings),
                null == this.drawings &&
                    ((this.drawings = []),
                    this.drawings.push({id: 1, quantity: 0}),
                    this.drawings.push({id: 2, quantity: 0}),
                    this.drawings.push({id: 3, quantity: 0}),
                    this.drawings.push({id: 4, quantity: 0}),
                    this.drawings.push({id: 5, quantity: 0}),
                    this.drawings.push({id: 6, quantity: 0}));
        }),
        (h.prototype.getRandomDraw = function (t) {
            for (var e = [], o = [], n = [], i = 0; i < t; i++) {
                var r = u.default.inst.drawingConf.getRandomDrawing();
                e.push({id: r.id, quantity: 1});
            }
            for (i = 0; i < e.length; i++)
                null == o[e[i].id] && (o[e[i].id] = {id: 0, quantity: 0}),
                    (o[e[i].id].id = e[i].id),
                    (o[e[i].id].quantity += e[i].quantity);
            return (
                o.forEach(function (t) {
                    n.push({type: p.Prop.drawing, profit: {draw: {id: t.id, quantity: t.quantity}}});
                }),
                {getLists: o, showDatas: n}
            );
        }),
        (h.prototype.getDrawings = function () {
            return this.drawings;
        }),
        (h.prototype.getDrawing = function (t) {
            return this.drawings[t - 1].quantity;
        }),
        (h.prototype.addDrawing = function (t, e) {
            (this.drawings[t - 1].quantity += e),
                l.app.local.setValue("drawing", this.drawings),
                l.app.event.emit(c.EventType.Home_Equip_Change_Page);
        }),
        (h.prototype.useDrawing = function (t, e) {
            this.drawings[t - 1].quantity >= e
                ? ((this.drawings[t - 1].quantity -= e),
                  l.app.local.setValue("drawing", this.drawings),
                  l.app.event.emit(c.EventType.Home_Equip_Change_Page))
                : console.log("图纸数量不足");
        }),
        (h.prototype.getDrawIcon = function (o) {
            return r(this, void 0, void 0, function () {
                var e;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (e = null), this.iconSprs.has(o) ? [3, 2] : [4, this.loadIcon(o)];
                        case 1:
                            return (e = t.sent()), this.iconSprs.set(o, e), [3, 3];
                        case 2:
                            (e = this.iconSprs.get(o)), (t.label = 3);
                        case 3:
                            return [2, e];
                    }
                });
            });
        }),
        (h.prototype.loadIcon = function (t) {
            return new Promise(function (o) {
                cc.resources.load(t, cc.SpriteFrame, function (t, e) {
                    o(e);
                });
            });
        }),
        h);
function h() {
    var t = (null !== s && s.apply(this, arguments)) || this;
    return (t.drawings = []), (t.iconSprs = new Map()), t;
}
o.DrawingController = i;
