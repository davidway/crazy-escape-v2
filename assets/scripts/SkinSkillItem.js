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
    u = t("LayerMgr"),
    p = t("ResMgr"),
    h = t("BaseUI"),
    d = t("EventTypes"),
    f = t("UserDataController"),
    y = t("ConfData"),
    g = t("EffectMgr"),
    m = t("UIEnum"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((l = h.default),
        i(_, l),
        (_.prototype.onEnable = function () {
            var t = this;
            this.lock && this.on(this.node, this.onUnlockSkill, this),
                c.app.event.on(
                    d.EventType.On_Hero_Skin_Skill_Unlock,
                    function () {
                        t.updateView();
                    },
                    this
                );
        }),
        (_.prototype.onDisable = function () {
            this.off(this.node), c.app.event.targetOff(this);
        }),
        (_.prototype.onUnlockSkill = function () {
            var t;
            f.default.inst.hasSkin(this.skin_id)
                ? ((t = f.default.inst.getSkinSkillStatus(this.skin_id)),
                  this.lock && !t && c.app.gui.openUI(m.UIEnum.UnlockSkillView, u.LayerEnum.TOP_LAYER, this.skin_id))
                : g.default.inst.showTips("尚未解锁英雄");
        }),
        (_.prototype.updateView = function () {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = y.default.inst.playerSkinConf.getSkinSKillVo(this.skill_id)),
                                (this.nameLab.string = e.name),
                                (this.descLab.string = e.desc),
                                [4, p.default.inst.getAsset(e.icon, cc.SpriteFrame, "icons")]
                            );
                        case 1:
                            return (
                                (e = t.sent()),
                                (this.icon.spriteFrame = e || null),
                                this.lock && (this.lock.active = !1),
                                this.lock &&
                                    (f.default.inst.getSkinSkillStatus(this.skin_id) || (this.lock.active = !0)),
                                [2]
                            );
                    }
                });
            });
        }),
        (_.prototype.setData = function (t, e) {
            return a(this, void 0, void 0, function () {
                return s(this, function () {
                    return (this.skin_id = t), (this.skill_id = e), this.updateView(), [2];
                });
            });
        }),
        r([e(cc.Sprite)], _.prototype, "icon", void 0),
        r([e(cc.Label)], _.prototype, "nameLab", void 0),
        r([e(cc.Label)], _.prototype, "descLab", void 0),
        r([e(cc.Node)], _.prototype, "lock", void 0),
        r([t], _));
function _() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.icon = null), (t.nameLab = null), (t.descLab = null), (t.lock = null), (t.skin_id = 0), (t.skill_id = 0), t
    );
}
o.default = t;
