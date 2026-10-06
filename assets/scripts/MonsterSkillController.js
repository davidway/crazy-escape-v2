var t = require;
var e = module;
var o = exports;
var r =
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
Object.defineProperty(o, "__esModule", {value: !0}), (o.MonsterSkillController = void 0);
var s = t("ResMgr"),
    l = t("ResUtils"),
    c = t("GameEnums"),
    u = t("GameMgr"),
    p = t("Dizziness"),
    i = t("SkillFactory"),
    t =
        ((n.prototype.setLayer = function (t, e) {
            (this.bottomLayer = t), (this.topLayer = e);
        }),
        (n.prototype.initConflict = function (t) {
            var e = this;
            t.forEach(function (t) {
                e.conflict.set(t.id, t.conflict);
            });
        }),
        (n.prototype.checkSkillConflict = function (t, e) {
            return !!this.conflict.has(t) && this.conflict.get(t).includes(e);
        }),
        (n.prototype.clear = function () {
            (this.time = 0),
                (this.awaitDizz.length = 0),
                this.dizzMap.forEach(function (t) {
                    t.recycle();
                }),
                this.dizzMap.clear(),
                this.skills.forEach(function (t) {
                    for (var e = 0, o = t; e < o.length; e++) o[e].clear();
                }),
                this.skills.clear();
        }),
        (n.prototype.addSkill = function (t, e) {
            var o, n;
            t &&
                e &&
                ((n = t.node.uuid),
                (o = this.skills.get(n)) || this.skills.set(n, (o = [])),
                (n = i.default.inst.getMonsterSkill(e.type)).setData(t, e),
                n.setSkillLayer(this.topLayer),
                o.push(n));
        }),
        (n.prototype.delMonsterSkills = function (t) {
            null == t || t.clearSkills();
            var e = this.skills.get(t.node.uuid);
            if (e) for (var o = 0, n = e; o < n.length; o++) n[o].clear();
            this.skills.delete(t.node.uuid);
        }),
        (n.prototype.delSkill = function (t, e) {
            var o,
                t = t.node.uuid,
                t = this.skills.get(t);
            e.clear(), t && -1 != (o = t.indexOf(e)) && t.splice(o, 1);
        }),
        (n.prototype.onDizziness = function (t, e) {
            this.awaitDizz.push({ower: t, duration: e});
        }),
        (n.prototype.delDizziness = function (t) {
            this.dizzMap.delete(t.uuid);
        }),
        (n.prototype.createDizzs = function () {
            return r(this, void 0, void 0, function () {
                var e, o, n;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            (e = Math.min(50, this.awaitDizz.length)), (o = 0), (t.label = 1);
                        case 1:
                            return o < e
                                ? (n = this.awaitDizz.shift()) && n.ower && !n.ower.isDie
                                    ? [4, this.addDizz(n.ower, n.duration)]
                                    : [3, 3]
                                : [3, 5];
                        case 2:
                            return t.sent(), [3, 4];
                        case 3:
                            return [3, 5];
                        case 4:
                            return o++, [3, 1];
                        case 5:
                            return [2];
                    }
                });
            });
        }),
        (n.prototype.addDizz = function (n, i) {
            return r(this, void 0, void 0, function () {
                var e, o;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [
                                4,
                                s.default.inst.getNodeFromPool(
                                    l.ResUtils.MonsterSkillRes.Dizziness.url,
                                    l.ResUtils.MonsterSkillRes.Dizziness.bundle
                                )
                            ];
                        case 1:
                            return (
                                (e = t.sent()),
                                (o = e.getComponent(p.default)).setData(n, i),
                                this.dizzMap.set(e.uuid, o),
                                (o = n.getMoveComp().getPosition()),
                                (e.position = o),
                                (e.parent = this.topLayer),
                                [2]
                            );
                    }
                });
            });
        }),
        (n.prototype.onUpdate = function (t) {
            this.updateDizziness(t), this.updateSkills(t);
        }),
        (n.prototype.updateSkills = function (t) {
            if (!u.default.inst.onStatus(c.GameStatus.PAUSE | c.GameStatus.OVER) && 0 != this.skills.size) {
                this.time += t;
                for (var e = 0, o = Array.from(this.skills.keys()); e < o.length; e++) {
                    var n = o[e],
                        n = this.skills.get(n);
                    if (n) for (var i = 0, r = n; i < r.length; i++) r[i].onUpdate(this.time, t);
                }
            }
        }),
        (n.prototype.updateDizziness = function (t) {
            0 < this.awaitDizz.length && this.createDizzs();
            for (var e = 0, o = Array.from(this.dizzMap.keys()); e < o.length; e++) {
                var n = o[e],
                    n = this.dizzMap.get(n);
                n && n.onUpdate(t);
            }
        }),
        n);
function n() {
    (this.bottomLayer = null),
        (this.topLayer = null),
        (this.time = 0),
        (this.skills = new Map()),
        (this.dizzMap = new Map()),
        (this.awaitDizz = []),
        (this.conflict = new Map());
}
o.MonsterSkillController = new t();
