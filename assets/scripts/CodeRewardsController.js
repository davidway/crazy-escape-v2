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
    c = t("App"),
    u = t("LayerMgr"),
    e = t("Singleton"),
    p = t("UIEnum"),
    h = t("ConfData"),
    s = t("GameSetting"),
    d = t("Prop"),
    f = t("DrawingController"),
    y = t("EquipController"),
    g = t("UserDataController"),
    i =
        ((a = e.Singleton()),
        i(m, a),
        (m.prototype.initData = function () {
            var e = this;
            this._codes = c.app.local.getValue("codes");
            var t = s.GameSetting.inst.code_rewards;
            if (t)
                for (var o = 0, n = t; o < n.length; o++) {
                    var i = n[o];
                    this.codeMap.set(i.code, i);
                }
            var r,
                t = s.GameSetting.inst.user_codes;
            (t = cc.sys.isBrowser
                ? [{openid: "user_1", code: "dts3", gem: 401, gold: 401, drawings: 41, equips: 5}]
                : t) &&
                ((r = c.app.http.getOpenid()),
                t.forEach(function (t) {
                    t.openid == r && e.codeMap.set(t.code, t);
                }));
        }),
        (m.prototype.codeIsUsed = function (t) {
            return void 0 !== this._codes[t];
        }),
        (m.prototype.codeIsCorrect = function (t) {
            return this.codeMap.has(t);
        }),
        (m.prototype.getCodeRewards = function (s) {
            return r(this, void 0, void 0, function () {
                var e, o, n, i, r, a;
                return l(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (
                                ((this._codes[s] = 1),
                                c.app.local.setValue("codes", this._codes),
                                (e = this.getRewards(s)),
                                (o = []),
                                0 < e.gem &&
                                    (o.push({type: d.Prop.Gem, profit: {num: e.gem}}), g.default.inst.addGem(e.gem)),
                                0 < e.gold &&
                                    (o.push({type: d.Prop.gold, profit: {num: e.gold}}),
                                    g.default.inst.addGold(e.gold)),
                                0 < e.drawings &&
                                    h.default.inst.drawingConf
                                        .getRandomDraw(e.drawings)
                                        .showDatas.forEach(function (t) {
                                            o.push(t),
                                                f.DrawingController.inst.addDrawing(
                                                    t.profit.draw.id,
                                                    t.profit.draw.quantity
                                                );
                                        }),
                                0 < e.equips)
                            )
                                for (
                                    n = function (t) {
                                        t = {id: t.equip_id, quality: 1, level: 1, status: 0, equipType: t.type};
                                        console.log("装备：", t),
                                            o.push({type: d.Prop.equip, profit: {equip: t}}),
                                            y.EquipController.inst.addEquip(t.id, t.quality, 1);
                                    },
                                        i = 0;
                                    i < e.equips;
                                    i++
                                )
                                    (r = h.default.inst.equipConf.getRandomEquip()), n(r);
                            return (
                                (a = {type: 1, profitList: o, iconType: 2}),
                                [4, c.app.gui.openUI(p.UIEnum.ReturnMaterialView, u.LayerEnum.VIEW_LAYER, a)]
                            );
                        case 1:
                            return t.sent(), [2];
                    }
                });
            });
        }),
        (m.prototype.getRewards = function (t) {
            return this.codeMap.get(t);
        }),
        m);
function m() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t._codes = null), (t.codeMap = new Map()), t;
}
o.default = i;
