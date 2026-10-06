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
    c = t("ResMgr"),
    e = t("Singleton"),
    u = t("ResUtils"),
    p = t("ConfData"),
    h = t("UserDataController"),
    i =
        ((a = e.Singleton()),
        i(d, a),
        (d.prototype.addNewAbilityData = function (t, e) {
            (e = void 0 === e ? !1 : e) ? this.NewAbilityData.unshift(t) : this.NewAbilityData.push(t),
                console.warn("更新功能开启", t.describe);
        }),
        (d.prototype.onUnLockChapter = function () {
            return r(this, void 0, void 0, function () {
                var e, o, n, i, r, a, s;
                return l(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (
                                ((e = h.default.inst.chapter),
                                (a = {
                                    type: 2,
                                    iconURL: "texture/chapter/chapter_" + e,
                                    describe: "副本",
                                    describeURL: "texture/chapter/name_" + e
                                }),
                                d.inst.addNewAbilityData(a),
                                null == (o = p.default.inst.playerSkillConf.getOrdinarySkillInfoVo())[e])
                            )
                                return [3, 5];
                            (n = []), (i = 0), (t.label = 1);
                        case 1:
                            return i < o[e].length
                                ? [
                                      4,
                                      c.default.inst.getAsset(
                                          u.ResUtils.Textures.Skillicons.url,
                                          cc.SpriteAtlas,
                                          u.ResUtils.Textures.Skillicons.bundle
                                      )
                                  ]
                                : [3, 4];
                        case 2:
                            (r = t.sent()),
                                (a = p.default.inst.playerSkillConf.getSkillInfoVo(o[e][i].id)),
                                r && a && ((s = r.getSpriteFrame(a.icon)), (n[i] = {name: o[e][i].name, icon: s})),
                                (t.label = 3);
                        case 3:
                            return i++, [3, 1];
                        case 4:
                            (s = {type: 3, describe: "技能", skillDatas: n}),
                                d.inst.addNewAbilityData(s),
                                (t.label = 5);
                        case 5:
                            return [2];
                    }
                });
            });
        }),
        d);
function d() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.NewAbilityData = []), (t.inEject = !1), t;
}
o.default = i;
